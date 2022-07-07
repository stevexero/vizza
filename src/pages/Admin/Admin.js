import { useState } from 'react';

import AddEditMenuItem from '../../components/AddEditMenuItem/AddEditMenuItem';
import AdminMenuItems from '../../components/AdminMenuItems/AdminMenuItems';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';

import './Admin.css';

const Admin = ({ handleAddMenuItem, fetchMenuItems, menuItems }) => {
  const [adminDisplay, setAdminDisplay] = useState('adminhome');

  const adminView = (e) => {
    setAdminDisplay(e);
  };

  return (
    <div className='Admin'>
      <div className='Admin-sidebar'>
        <AdminSidebar adminView={adminView} fetchMenuItems={fetchMenuItems} />
      </div>
      {adminDisplay === 'adminhome' ? (
        <h1>Vizza Admin Home</h1>
      ) : adminDisplay === 'createmenuitem' ? (
        <div className='add-menu-item'>
          <AddEditMenuItem handleAddMenuItem={handleAddMenuItem} />
        </div>
      ) : (
        adminDisplay === 'viewmenuitems' && (
          <div className='view-menu-items'>
            <AdminMenuItems menuItems={menuItems} />
          </div>
        )
      )}
    </div>
  );
};
export default Admin;
