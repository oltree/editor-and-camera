import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/theme-github';

import { EditorContext } from '../../../context/context';

export const HtmlEditor = () => {
  const { html, setHtml } = useContext(EditorContext);

  return (
    <AceEditor
      mode='html'
      theme='github'
      name='html-editor'
      fontSize='16px'
      height='100%'
      width='100%'
      value={html}
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
      }}
      placeholder='Write your HTML codes here!'
      onChange={setHtml}
    />
  );
};
