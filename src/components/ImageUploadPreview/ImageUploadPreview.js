import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProgressBar from '@ramonak/react-progress-bar';

import FirebaseStorageService from '../../FirebaseStorageService';

import './ImageUploadPreview.css';

const ImageUploadPreview = ({
  basePath,
  existingImageUrl,
  handleUploadFinish,
  handleUploadCancel,
}) => {
  const [uploadProgress, setUploadProgress] = useState(-1);
  const [imageUrl, setImageUrl] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    if (existingImageUrl) {
      setImageUrl(existingImageUrl);
    } else {
      setImageUrl('');
      setUploadProgress(-1);
      fileInputRef.current.value = null;
    }
  }, [existingImageUrl]);

  const handleFileChanged = async (e) => {
    const files = e.target.files;
    const file = files[0];

    if (!file) {
      console.log('file select failed');
      return;
    }

    const generatedFileId = uuidv4();

    try {
      const downloadUrl = await FirebaseStorageService.uploadFile(
        file,
        `${basePath}/${generatedFileId}`,
        setUploadProgress
      );

      setImageUrl(downloadUrl);

      handleUploadFinish(downloadUrl);
    } catch (error) {
      setUploadProgress(-1);
      fileInputRef.current.value = null;
      console.log(error);
    }
  };

  const handleCancelImageClick = () => {
    FirebaseStorageService.deleteFile(imageUrl);

    fileInputRef.current.value = null;

    setImageUrl('');
    setUploadProgress(-1);

    handleUploadCancel();
  };

  useEffect(() => {
    console.log(uploadProgress);
  }, [uploadProgress]);

  return (
    <div className='ImageUploadPreview'>
      {uploadProgress > -1 ||
        (imageUrl ? null : (
          <label
            className='ImageUploadPreview-edit-image button button-edit button-block mt-2'
            htmlFor='ImageUploadPreview-edit-image'>
            Select Image
          </label>
        ))}
      <input
        id='ImageUploadPreview-edit-image'
        type='file'
        accept='image/*'
        className='mt-1'
        onChange={handleFileChanged}
        ref={fileInputRef}
        hidden
      />
      {!imageUrl && uploadProgress > -1 ? (
        <div className='mt-2'>
          <label htmlFor='file'>Upload Progress:</label>
          <ProgressBar
            id='file'
            completed={uploadProgress}
            className='mt-1'
            animateOnRender={true}
            height='32px'
            bgColor='dodgerblue'
          />
        </div>
      ) : null}
      {imageUrl ? (
        <div className='ImageUploadPreview-image-container'>
          <img
            src={imageUrl}
            alt={imageUrl}
            className='ImageUploadPreview-image mt-2'
          />
          <button
            type='button'
            onClick={handleCancelImageClick}
            className='button button-delete button-block mt-2'>
            Discard Image
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default ImageUploadPreview;
