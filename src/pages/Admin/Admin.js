import AddEditMenuItem from '../../components/AddEditMenuItem/AddEditMenuItem';
import './Admin.css';

const Admin = ({ handleAddMenuItem }) => {
  return (
    <div className='Admin'>
      <div className='add-menu-item'>
        <AddEditMenuItem handleAddMenuItem={handleAddMenuItem} />
      </div>
    </div>
  );
};
export default Admin;
