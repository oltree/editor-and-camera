import cn from 'classnames';
import { useContext, useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import Webcam from 'react-webcam';

import { EditorContext } from '../../context/context';

import styles from './view.module.css';

export const View = () => {
  const [camera, setCamera] = useState(false);

  const { html, css, javascript } = useContext(EditorContext);

  const document = useMemo(() => {
    if (!html && !css && !javascript) {
      return;
    }

    return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${css}</style>
        </head>
        <body>
          ${html}

          <script>${javascript}</script>
        </body>
      </html>
    `;
  }, [html, css, javascript]);

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <button
            className={cn(styles.button, { [styles.active]: camera })}
            onClick={() => setCamera(!camera)}
          >
            {camera ? 'Camera Off' : 'Camera On'}
          </button>
        </header>

        <div className={styles.content}>
          {document ? (
            <iframe
              title='preview'
              srcDoc={document}
              className={styles.preview}
            />
          ) : (
            <p className={styles.empty}>Your code will be displayed here!</p>
          )}
        </div>
      </div>

      {camera ? (
        <Draggable>
          <Webcam
            audio={false}
            width={300}
            height={300}
            videoConstraints={{
              width: 300,
              height: 300,
              facingMode: 'user',
            }}
            className={styles.camera}
          />
        </Draggable>
      ) : null}
    </>
  );
};
