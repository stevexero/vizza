import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import FirebaseAuthService from './FirebaseAuthService';
import FirebaseFirestoreService from './FirebaseFirestoreService';

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import OrderOnline from './pages/OrderOnline/OrderOnline';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [blogItems, setBlogItems] = useState([]);

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

  const fetchBlogItems = async () => {
    try {
      const temp = [];

      const res = await FirebaseFirestoreService.readCollection('blogitems');

      res.forEach((doc) => {
        temp.push(doc.data());
      });

      setBlogItems(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBlogItem = async (newBlogItem) => {
    try {
      const res = await FirebaseFirestoreService.createDocument(
        'blogitems',
        newBlogItem
      );

      console.log(res.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCustomers = async () => {
    await console.log('fetching customers');
  };

  useEffect(() => {
    fetchAdminUids();
    fetchMenuItems();
    fetchBlogItems();
    fetchCustomers();
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
                    handleAddBlogItem={handleAddBlogItem}
                    fetchMenuItems={fetchMenuItems}
                    menuItems={menuItems}
                    blogItems={blogItems}
                    fetchBlogItems={fetchBlogItems}
                    fetchCustomers={fetchCustomers}
                  />
                ) : (
                  <Home menuItems={menuItems} />
                )
              }
            />
          )}
          <Route path='/blog' element={<Blog />} />
          <Route path='/order-online' element={<OrderOnline />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
