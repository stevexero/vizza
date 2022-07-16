import './AdminBlogItems.css';

const AdminBlogItems = ({ blogItems }) => {
  return (
    <div className='AdminBlogItems p-1'>
      <div className='AdminBlogItems-items-container p-1'>
        {blogItems.map((item, index) => (
          <div className='AdminBlogItems-item radius p-1' key={index}>
            <div className='AdminBlogItems-item-top'>
              <img
                src={item.imageUrl}
                alt={item.title}
                className='AdminBlogItems-item-image'
              />
            </div>
            <div className='AdminBlogItems-item-center'>
              <h4 className='sm-heading mt-1'>{item.title}</h4>
            </div>
            <div className='AdminBlogItems-item-bottom mt-1'>
              <button className='button button-edit mt-1'>Edit</button>
              <button className='button button-delete mt-1 ml-1'>Delete</button>
              <button className='button button-submit mt-1 ml-1'>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminBlogItems;
