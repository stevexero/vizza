import { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

import Configuration from './editorConfig';

import './AddEditBlogArticle.css';

const AddEditBlogArticle = () => {
  const [editor, seteditor] = useState({});

  useEffect(() => {
    const editor = new EditorJS(Configuration());
    seteditor(editor);
  }, []);

  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  };

  return (
    <div className='AddEditBlogArticle'>
      <button onClick={onSave}>Save</button>
      <div id='editorjs'></div>
    </div>
  );
};
export default AddEditBlogArticle;
