import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirebaseAuthService from './FirebaseAuthService';
import FirebaseFirestoreService from './FirebaseFirestoreService';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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
  }, [user, fetchAdminUids]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route
          path='/'
          element={<Home existingUser={user} isAdmin={isAdmin} />}
        />
        {isAdmin && (
          <Route
            path='/admin'
            element={
              isAdmin ? (
                <Admin handleAddMenuItem={handleAddMenuItem} />
              ) : (
                <Home />
              )
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
