import { useNavigate } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import {
  MdMenuBook,
  MdHomeWork,
  MdOutlineArrowBack,
  MdRefresh,
} from 'react-icons/md';
import { RiQuillPenFill } from 'react-icons/ri';
import { BsPersonSquare } from 'react-icons/bs';
import { FaPersonBooth } from 'react-icons/fa';

import './AdminSidebar.css';

const AdminSidebar = ({
  adminView,
  fetchMenuItems,
  fetchBlogItems,
  fetchEmployees,
  fetchCustomers,
}) => {
  const navigate = useNavigate();

  return (
    <div className='AdminSidebar text-white-smoke'>
      <div
        className='AdminSidebar-title-no-collapse p-1'
        onClick={() => navigate('/')}>
        <MdOutlineArrowBack /> <p className='ml-1'>Back to Site</p>
      </div>
      <div
        className='AdminSidebar-title-no-collapse p-1'
        onClick={() => adminView('adminhome')}>
        <MdHomeWork /> <p className='ml-1'>Home</p>
      </div>
      <Collapsible
        trigger={
          <div className='AdminSidebar-title'>
            <MdMenuBook /> <p className='ml-1'>Menu</p>
          </div>
        }
        transitionTime='100'>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('viewmenuitems')}>
          - View Menu Items
          <MdRefresh onClick={() => fetchMenuItems()} />
        </div>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('createmenuitem')}>
          - Create New Menu Item
        </div>
      </Collapsible>
      {/* BLOG */}
      <Collapsible
        trigger={
          <div className='AdminSidebar-title'>
            <RiQuillPenFill /> <p className='ml-1'>Blog</p>
          </div>
        }
        transitionTime='100'>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('viewblogitems')}>
          - View Blog Articles
          <MdRefresh onClick={() => fetchBlogItems()} />
        </div>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('createblogarticle')}>
          - Create New Blog Article
        </div>
      </Collapsible>
      {/* EMPLOYEES */}
      <Collapsible
        trigger={
          <div className='AdminSidebar-title'>
            <FaPersonBooth /> <p className='ml-1'>Employees</p>
          </div>
        }
        transitionTime='100'>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('viewemployees')}>
          - View Employees
          <MdRefresh onClick={() => fetchEmployees()} />
        </div>
      </Collapsible>
      {/* CUSTOMERS */}
      <Collapsible
        trigger={
          <div className='AdminSidebar-title'>
            <BsPersonSquare /> <p className='ml-1'>Customers</p>
          </div>
        }
        transitionTime='100'>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('viewcustomers')}>
          - View Customers
          <MdRefresh onClick={() => fetchCustomers()} />
        </div>
      </Collapsible>
      {/* <div className='AdminSidebar-bottom p-1'>Add Category</div> */}
      {/* Work on this later */}
    </div>
  );
};
export default AdminSidebar;
