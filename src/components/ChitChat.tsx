import { useState } from 'react';
import { Messages, MoodSmile, Paperclip } from 'tabler-icons-react';
import '../css/ChitChat.css';
import Avatar from '../static/Avatar1.jpg';

function ChitChat() {
  const [text, setText] = useState<string>('');
  return (
    <div className='chitChatContainer'>
      <div className='chitChatBody'>
        <div className='chitChatTop'>
          <img src={Avatar} alt='demo avatar' className='chitChatAvatar' />
          <span className='chitChatPartner'>You are speaking with Andreas</span>
        </div>
        <div className='chitChatMessages'>
          <div className='chitChatToday'>Today</div>
          <div className='chitChatMessageGroup'>
            <div className='chitChatMyMessage'>
              <div className='chitChatTimestamp'>11:14</div>
              <div className='chitChatMyMessageText'>Good day!</div>
            </div>
          </div>
          <div className='chitChatMessageGroup'>
            <div className='chitChatPartnerMessage'>
              <div className='chitChatTimestamp'>11:15</div>
              <div className='chitChatPartnerMessageText'>Hello!</div>
            </div>
            <div className='chitChatPartnerMessage'>
              <div className='chitChatPartnerMessageText'>
                How can I assist you today?
              </div>
            </div>
          </div>
          <div className='chitChatMessageGroup'>
            <div className='chitChatMyMessage'>
              <div className='chitChatTimestamp'>11:16</div>
              <div className='chitChatMyMessageText'>
                I need some help with the internet
              </div>
            </div>
            <div className='chitChatMyMessage'>
              <div className='chitChatMyMessageText'>It's not working</div>
            </div>
          </div>
          <div className='chitChatToday'>Andreas is typing...</div>
        </div>
        <div className='chitChatInput'>
          <input
            className='chitChatInputBox'
            placeholder='Write a response...'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setText('');
            }}
          />
          <div className='chitChatInputIcons'>
            <MoodSmile className='chitChatInputIcon' />
            <Paperclip
              className='chitChatInputIcon'
              color='rgba(0, 0, 0, 0.2)'
            />
          </div>
        </div>
      </div>
      <div className='chitChatFloatingIcon'>
        <Messages size={32} color='white' />
      </div>
    </div>
  );
}

export default ChitChat;
