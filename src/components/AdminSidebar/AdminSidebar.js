import { useNavigate } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import {
  MdMenuBook,
  MdHomeWork,
  MdOutlineArrowBack,
  MdRefresh,
} from 'react-icons/md';

import './AdminSidebar.css';

const AdminSidebar = ({ adminView, fetchMenuItems }) => {
  const navigate = useNavigate();

  return (
    <div className='AdminSidebar text-white-smoke'>
      <div
        className='AdminSidebar-title-no-collapse p-1'
        onClick={() => navigate(-1)}>
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
          View Menu Items
          <MdRefresh onClick={() => fetchMenuItems()} />
        </div>
        <div
          className='AdminSidebar-item p-1'
          onClick={() => adminView('createmenuitem')}>
          Create New Menu Item
        </div>
      </Collapsible>
      {/* <div className='AdminSidebar-bottom p-1'>Add Category</div> */}
      {/* Work on this later */}
    </div>
  );
};
export default AdminSidebar;
