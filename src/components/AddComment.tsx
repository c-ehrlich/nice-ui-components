import { useState } from 'react';
import { InfoCircle } from 'tabler-icons-react';
import styles from '../css/AddComment.module.css';
import Avatar from '../static/Avatar1.jpg';

function AddComment() {
  const [text, setText] = useState<string>('');
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Add a new comment</h2>
        <img className={styles.avatar} src={Avatar} alt='sample avatar' />
        <textarea
          rows={4}
          placeholder='Type your message...'
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <div className={styles.note}>
          <div className={styles.tooltip}>
            <InfoCircle color='#bbb' />
            <span className={styles.tooltipText}>
              But please don't try to inject any JavaScript...
            </span>
          </div>
          <span>Some HTML is OK.</span>
        </div>
        <button onClick={() => setText('')} className={styles.button}>
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
