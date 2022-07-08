import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { ValidPrice } from '../../utils/regex';

import ImageUploadPreview from '../ImageUploadPreview/ImageUploadPreview';

import 'react-toastify/dist/ReactToastify.css';
import './AddEditMenuItem.css';

const AddEditMenuItem = ({ handleAddMenuItem }) => {
  const [category, setCategory] = useState('salads');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [textLength, setTextLength] = useState(0);

  const validatePrice = () => {
    if (!ValidPrice.test(price)) {
      setPriceError(true);
    }
  };

  const handleMenuItemSubmit = (e) => {
    e.preventDefault();

    validatePrice();

    const newMenuItem = {
      category,
      title,
      description,
      price,
      imageUrl,
    };

    if (textLength > 255) {
      console.log('text is too long');
    } else {
      handleAddMenuItem(newMenuItem);

      toast(`Uploading ${title} to the database`, {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setCategory('salads');
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setTextLength(0);
    }
  };

  useEffect(() => {
    setTextLength(description.length);
  }, [description, textLength]);

  return (
    <div className='AddEditMenuItem mt-4 mb-4'>
      <form onSubmit={handleMenuItemSubmit} className='mr-1 p-1 radius'>
        <label htmlFor='category' className='mt-1'>
          Select a Category<span className='text-red'>&nbsp;*</span>
        </label>
        <select
          name='category'
          id='category'
          className='text-input mt-1'
          onChange={(e) => setCategory(e.target.value)}>
          <option value='salads' defaultChecked>
            Salads
          </option>
          <option value='pizzas'>Pizzaz</option>
          <option value='desserts'>Desserts</option>
          <option value='drinks'>Drinks</option>
        </select>
        <label htmlFor='title' className='mt-2'>
          Title
          <span className='text-red'>&nbsp;*</span>
        </label>
        <input
          id='title'
          type='text'
          placeholder='ex: deep-fried pizza'
          className='text-input mt-1'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='description' className='mt-2'>
          Description<span className='text-red'>&nbsp;*</span>
        </label>
        <textarea
          name='description'
          id='description'
          placeholder='ex: Juicy, sizzling, made-to-order...'
          className='text-input mt-1'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <h6 style={{ color: textLength > 255 ? 'red' : 'slategray' }}>
          {255 - textLength} Characters left
        </h6>
        <label htmlFor='price' className='mt-2'>
          Price
          <span className='text-red'>&nbsp;*</span>
        </label>
        <input
          type='text'
          name='price'
          id='price'
          placeholder='ex: 9.95'
          className='text-input mt-1'
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {priceError && <p>Enter a valid price</p>}
        <ImageUploadPreview
          basePath='menuitems'
          existingImageUrl={imageUrl}
          handleUploadFinish={(downloadUrl) => setImageUrl(downloadUrl)}
          handleUploadCancel={() => setImageUrl('')}
        />
        <button type='submit' className='button button-submit mt-1'>
          Add Item
        </button>
      </form>
    </div>
  );
};
export default AddEditMenuItem;
