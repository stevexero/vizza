import { useState } from 'react';

import AddEditMenuItem from '../../components/AddEditMenuItem/AddEditMenuItem';
import AddEditBlogArticle from '../../components/AddEditBlogArticle/AddEditBlogArticle';
import AdminMenuItems from '../../components/AdminMenuItems/AdminMenuItems';
import AdminBlogItems from '../../components/AdminBlogItems/AdminBlogItems';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';

import './Admin.css';

const Admin = ({
  handleAddMenuItem,
  handleAddBlogItem,
  fetchMenuItems,
  menuItems,
  blogItems,
  fetchBlogItems,
  fetchEmployees,
  fetchCustomers,
}) => {
  const [adminDisplay, setAdminDisplay] = useState('adminhome');

  const adminView = (adminView) => {
    setAdminDisplay(adminView);
  };

  return (
    <div className='Admin'>
      <div className='Admin-sidebar'>
        <AdminSidebar
          adminView={adminView}
          fetchMenuItems={fetchMenuItems}
          fetchBlogItems={fetchBlogItems}
          fetchEmployees={fetchEmployees}
          fetchCustomers={fetchCustomers}
        />
      </div>
      {adminDisplay === 'adminhome' ? (
        <div className='Admin-container'>
          <h1>Vizza Admin Home</h1>
          <div className='Admin-card'>
            <p>
              {menuItems.length > 0 ? menuItems.length : 0}{' '}
              {menuItems.length === 1 ? 'menu item' : 'menu items'}
            </p>
          </div>
          <div className='Admin-card'>
            <p>
              {blogItems.length > 0 ? blogItems.length : 0}{' '}
              {blogItems.length === 1 ? 'blog post' : 'blog posts'}
            </p>
          </div>
        </div>
      ) : adminDisplay === 'createmenuitem' ? (
        <div className='add-menu-item'>
          <AddEditMenuItem handleAddMenuItem={handleAddMenuItem} />
        </div>
      ) : adminDisplay === 'viewmenuitems' ? (
        <div className='view-menu-items'>
          <AdminMenuItems menuItems={menuItems} />
        </div>
      ) : adminDisplay === 'createblogarticle' ? (
        <AddEditBlogArticle handleAddBlogItem={handleAddBlogItem} />
      ) : (
        adminDisplay === 'viewblogitems' && (
          <AdminBlogItems blogItems={blogItems} />
        )
      )}
    </div>
  );
};
export default Admin;
