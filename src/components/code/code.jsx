import cn from 'classnames';
import { useState } from 'react';

import { CssEditor, HtmlEditor, JavaScriptEditor } from './components';

import { buttons } from './code.constant';

import styles from './code.module.css';

export const Code = () => {
  const [activeMode, setActiveMode] = useState(buttons[0].name);

  const toggleMode = name => {
    setActiveMode(name);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        {buttons.map(({ name, label }, index) => (
          <button
            key={index}
            className={cn(styles.button, {
              [styles.active]: activeMode === name,
            })}
            onClick={() => toggleMode(name)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.editor}>
        {activeMode === 'html' ? <HtmlEditor /> : null}
        {activeMode === 'css' ? <CssEditor /> : null}
        {activeMode === 'javascript' ? <JavaScriptEditor /> : null}
      </div>
    </div>
  );
};
