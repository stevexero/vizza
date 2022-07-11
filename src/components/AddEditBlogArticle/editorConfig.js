import { EDITOR_JS_TOOLS } from '../../utils/constants';

const Configuration = () => {
  return {
    holder: 'editorjs',
    autofocus: true,
    tools: EDITOR_JS_TOOLS,

    data: {
      time: 1552744582955,
      blocks: [
        {
          id: 'sheNwCUP5A',
          type: 'header',
          data: {
            text: 'Blog Title',
          },
        },
        {
          id: 'sheNwCUP5B',
          type: 'paragraph',
          data: {
            text: 'Blog paragraph',
          },
        },
      ],
      version: '2.11.10',
    },
  };
};

export default Configuration;
