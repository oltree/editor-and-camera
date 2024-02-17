import React from 'react';
import ReactDOM from 'react-dom/client';

import { EditorProvider } from './context/context';

import { Code } from './components/code';
import { View } from './components/view';

import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorProvider>
      <div className='main-layout'>
        <Code />
        <View />
      </div>
    </EditorProvider>
  </React.StrictMode>
);
