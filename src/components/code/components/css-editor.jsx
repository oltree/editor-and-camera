import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/theme-github';

import { EditorContext } from '../../../context/context';

export const CssEditor = () => {
  const { css, setCss } = useContext(EditorContext);

  return (
    <AceEditor
      mode='css'
      theme='github'
      name='css-editor'
      fontSize='16px'
      height='100%'
      width='100%'
      value={css}
      showPrintMargin={true}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
      }}
      placeholder='Write your CSS codes here!'
      onChange={setCss}
    />
  );
};
