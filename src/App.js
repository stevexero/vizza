import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import FirebaseAuthService from './FirebaseAuthService';
import FirebaseFirestoreService from './FirebaseFirestoreService';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  const fetchAdminUids = useCallback(async () => {
    try {
      if (user) {
        const res = await FirebaseFirestoreService.readAdminUids();

        if (res === `"${user.uid}"`) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const fetchMenuItems = async () => {
    try {
      const temp = [];

      const res = await FirebaseFirestoreService.readCollection('menuitems');

      res.forEach((doc) => {
        temp.push(doc.data());
      });

      setMenuItems(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddMenuItem = async (newMenuItem) => {
    try {
      const res = await FirebaseFirestoreService.createDocument(
        'menuitems',
        newMenuItem
      );

      console.log(res.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdminUids();
    fetchMenuItems();
  }, [user, fetchAdminUids]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route
            path='/'
            element={
              <Home
                existingUser={user}
                isAdmin={isAdmin}
                menuItems={menuItems}
              />
            }
          />
          {isAdmin && (
            <Route
              path='/admin'
              element={
                isAdmin ? (
                  <Admin
                    handleAddMenuItem={handleAddMenuItem}
                    fetchMenuItems={fetchMenuItems}
                    menuItems={menuItems}
                  />
                ) : (
                  <Home menuItems={menuItems} />
                )
              }
            />
          )}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
