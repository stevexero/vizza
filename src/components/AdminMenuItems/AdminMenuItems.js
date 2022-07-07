import './AdminMenuItems.css';

const AdminMenuItems = ({ menuItems }) => {
  return (
    <div className='AdminMenuItems p-1'>
      <div className='AdminMenuItems-items-container p-1'>
        {menuItems.map((item, index) => (
          <div className='AdminMenuItems-item p-1' key={index}>
            <div className='AdminMenuItems-item-left mr-2'>
              <img
                src={item.imageUrl}
                alt={item.title}
                className='AdminMenuItems-item-image'
              />
              <button className='button button-block button-edit mt-1'>
                Edit
              </button>
              <button className='button button-block button-delete mt-1'>
                Delete
              </button>
            </div>
            <div className='AdminMenuItems-item-right'>
              <p className='text-slate-grey'>
                <span className='text-red'>category:</span> {item.category}
              </p>
              <h4 className='sm-heading mt-1'>
                <span className='text-red'>title:</span> {item.title}
              </h4>
              <p className='AdminMenuItems-item-description text-slate-grey mt-1'>
                <span className='text-red'>description:</span>{' '}
                {item.description}
              </p>
              <p className='AdminMenuItems-item-description text-slate-grey mt-1'>
                <span className='text-red'>price:</span> {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminMenuItems;
