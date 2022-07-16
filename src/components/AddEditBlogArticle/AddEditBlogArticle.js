import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import MDEditor from '@uiw/react-md-editor';

import ImageUploadPreview from '../ImageUploadPreview/ImageUploadPreview';

import BlogHeaderTemp from '../../assets/blog-header-temp.png';

import './AddEditBlogArticle.css';

const AddEditBlogArticle = ({ handleAddBlogItem }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleBlogSubmit = (e) => {
    e.preventDefault();

    const newBlogItem = {
      imageUrl,
      title,
      content,
    };

    handleAddBlogItem(newBlogItem);

    toast(`Uploading ${title} to the database`, {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setImageUrl('');
    setTitle('');
    setContent('');
  };

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <div className='AddEditBlogArticle p-4'>
      {/* BLOG IMAGE */}
      <form onSubmit={handleBlogSubmit}>
        <div className='AddEditBlogArticle-image-container'>
          {imageUrl === '' && (
            <div
              className='AddEditBlogArticle-image'
              style={{
                background: `url(${BlogHeaderTemp}) no-repeat center center/cover`,
              }}></div>
          )}
          <ImageUploadPreview
            origin='blog'
            basePath='blogheaderimage'
            existingImageUrl={imageUrl}
            handleUploadFinish={(downloadUrl) => setImageUrl(downloadUrl)}
            handleUploadCancel={() => setImageUrl('')}
          />
        </div>
        {/* BLOG CONTENT */}
        <div className='AddEditBlogArticle-content-container mt-4'>
          <label htmlFor='title'>Blog Title</label>
          <input
            id='title'
            type='text'
            className='text-input mt-1'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='content' className='mt-2'>
            Blog Content
          </label>
          <MDEditor
            preview='edit'
            height={500}
            value={content}
            onChange={setContent}
            className='textarea mt-1'
            textareaProps={{
              placeholder:
                'This is a markdown editor.\nUse the toolbar above to change the styling of your content as needed.\nYou can also use standard markdown notation within this editor.',
            }}
          />
          {/* </div> */}
          {/* <MDEditor.Markdown
            source={content}
            style={{ whiteSpace: 'pre-wrap' }}
          /> */}
        </div>
        <button type='submit' className='button button-submit mt-2'>
          Add Blog
        </button>
      </form>
    </div>
  );
};
export default AddEditBlogArticle;
