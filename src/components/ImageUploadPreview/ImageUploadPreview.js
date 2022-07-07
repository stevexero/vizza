import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <div className='ImageUploadPreview'>
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChanged}
        ref={fileInputRef}
        hidden={uploadProgress > -1 || imageUrl}
      />
      {!imageUrl && uploadProgress > -1 ? (
        <div>
          <label htmlFor='file'>Upload Progress:</label>
          <progress id='file' value={uploadProgress} max='100'>
            {uploadProgress}%
          </progress>
          <span>{uploadProgress}%</span>
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
            className='mt-2'>
            Cancel image upload
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default ImageUploadPreview;
