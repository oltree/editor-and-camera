import { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/theme-github';

import { EditorContext } from '../../../context/context';

export const JavaScriptEditor = () => {
  const { javascript, setJavascript } = useContext(EditorContext);

  return (
    <AceEditor
      mode='javascript'
      theme='github'
      name='javascript-editor'
      fontSize='16px'
      height='100%'
      width='100%'
      value={javascript}
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
      }}
      placeholder='Write your JavaScript codes here!'
      onChange={setJavascript}
    />
  );
};
