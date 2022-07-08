import './MenuItems.css';

const MenuItems = ({ menuItems, icon, heading, category }) => {
  return (
    <div className='Menu-section mt-4'>
      <div className='Menu-section-header'>
        {icon}
        <h3 className='sm-heading ml-1'>{heading}</h3>
      </div>
      <div className='rule mt-1'></div>
      <div className='Menu-items-container mt-2'>
        {menuItems &&
          menuItems
            .filter((item) => item.category === category)
            .map((item, index) => (
              <div className='Menu-item' key={index}>
                <div className='Menu-item-left'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='Menu-image'
                  />
                </div>
                <div className='Menu-item-right ml-2'>
                  <h4 className='sm-heading'>{item.title}</h4>
                  <p className='Menu-item-description text-slate-grey mt-1'>
                    {item.description}
                  </p>
                  <p className='Menu-item-price text-slate-grey mt-1'>
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
      </div>
      {category === 'pizzas' && (
        <div className='BYO-button mt-4'>
          <button className='button button-white-smoke'>
            or Build Your Own
          </button>
        </div>
      )}
    </div>
  );
};
export default MenuItems;
