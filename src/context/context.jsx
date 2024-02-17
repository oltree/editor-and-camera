import { createContext, useState } from 'react';

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  const context = {
    html,
    setHtml,
    css,
    setCss,
    javascript,
    setJavascript,
  };

  return (
    <EditorContext.Provider value={context}>{children}</EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
