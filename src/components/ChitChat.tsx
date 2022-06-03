import { useState } from 'react';
import { Messages, MoodSmile, Paperclip } from 'tabler-icons-react';
import styles from '../css/ChitChat.module.css';
import Avatar from '../static/Avatar1.jpg';

function ChitChat() {
  const [text, setText] = useState<string>('');
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.top}>
          <img src={Avatar} alt='demo avatar' className={styles.avatar} />
          <span className={styles.partner}>You are speaking with Andreas</span>
        </div>
        <div className={styles.messages}>
          <div className={styles.today}>Today</div>
          <div className={styles.messageGroup}>
            <div className={styles.myMessage}>
              <div className={styles.timestamp}>11:14</div>
              <div className={styles.myMessageText}>Good day!</div>
            </div>
          </div>
          <div className={styles.messageGroup}>
            <div className={styles.partnerMessage}>
              <div className={styles.timestamp}>11:15</div>
              <div className={styles.partnerMessageText}>Hello!</div>
            </div>
            <div className={styles.partnerMessage}>
              <div className={styles.partnerMessageText}>
                How can I assist you today?
              </div>
            </div>
          </div>
          <div className={styles.messageGroup}>
            <div className={styles.myMessage}>
              <div className={styles.timestamp}>11:16</div>
              <div className={styles.myMessageText}>
                I need some help with the internet
              </div>
            </div>
            <div className={styles.myMessage}>
              <div className={styles.myMessageText}>It's not working</div>
            </div>
          </div>
          <div className={styles.today}>Andreas is typing...</div>
        </div>
        <div className={styles.input}>
          <input
            className={styles.inputBox}
            placeholder='Write a response...'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setText('');
            }}
          />
          <div className={styles.inputIcons}>
            <MoodSmile className={styles.inputIcon} />
            <Paperclip
              className={styles.inputIcon}
              color='rgba(0, 0, 0, 0.2)'
            />
          </div>
        </div>
      </div>
      <div className={styles.floatingIcon}>
        <Messages size={32} color='white' />
      </div>
    </div>
  );
}

export default ChitChat;
