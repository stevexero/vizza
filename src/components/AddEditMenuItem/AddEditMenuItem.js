import { useState } from 'react';

import { ValidPrice } from '../../utils/regex';

import ImageUploadPreview from '../ImageUploadPreview/ImageUploadPreview';

const AddEditMenuItem = ({ handleAddMenuItem }) => {
  const [category, setCategory] = useState('salads');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

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

    handleAddMenuItem(newMenuItem);
  };

  return (
    <form onSubmit={handleMenuItemSubmit}>
      <label htmlFor='category'>Select a Category</label>
      <select
        name='category'
        id='category'
        onChange={(e) => setCategory(e.target.value)}>
        <option value='salads' defaultChecked>
          Salads
        </option>
        <option value='pizzas'>Pizzaz</option>
        <option value='desserts'>Desserts</option>
        <option value='drinks'>Drinks</option>
      </select>
      <label htmlFor='title'>Title</label>
      <input
        id='title'
        type='text'
        placeholder='ex: deep-fried pizza'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor='description'>Description</label>
      <textarea
        name='description'
        id='description'
        placeholder='ex: Juicy, sizzling, made-to-order...'
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}></textarea>
      <label htmlFor='price'>Price</label>
      <input
        type='text'
        name='price'
        id='price'
        placeholder='ex: 9.95'
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
      <button type='submit'>Add Item</button>
    </form>
  );
};
export default AddEditMenuItem;
