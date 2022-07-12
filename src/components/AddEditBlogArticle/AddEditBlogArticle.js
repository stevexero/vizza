import { useState } from 'react';
import { RiEdit2Fill } from 'react-icons/ri';

import BlogHeaderTemp from '../../assets/blog-header-temp.png';

import './AddEditBlogArticle.css';

const AddEditBlogArticle = () => {
  const [headerImage, setHeaderImage] = useState(BlogHeaderTemp);

  return (
    <div className='AddEditBlogArticle p-4'>
      {/* BLOG IMAGE */}
      <form>
        <div className='AddEditBlogArticle-image-container'>
          <div
            className='AddEditBlogArticle-image'
            style={{
              background: `url(${headerImage}) no-repeat center center/cover`,
            }}></div>
          <div className='AddEditBlogArticle-image-edit'>
            <RiEdit2Fill />
          </div>
        </div>
        {/* BLOG CONTENT */}
        <div className='AddEditBlogArticle-content-container mt-4'>
          <label htmlFor='title'>Blog Title</label>
          <input id='title' type='text' className='text-input mt-1' />
          <label htmlFor='content' className='mt-2'>
            Blog Content
          </label>
          <textarea
            name='content'
            id='content'
            className='text-input mt-1'></textarea>
        </div>
        <button type='submit' className='button button-submit mt-2'>
          Add Blog
        </button>
      </form>
    </div>
  );
};
export default AddEditBlogArticle;
