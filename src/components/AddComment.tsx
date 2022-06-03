import { InfoCircle } from 'tabler-icons-react';
import '../css/AddComment.css';
import Avatar from '../static/Avatar1.jpg';

function AddComment() {
  return (
    <div className='addCommentContainer'>
      <div className='addCommentBody'>
        <h2 className='addCommentTitle'>Add a new comment</h2>
        <img className='addCommentAvatar' src={Avatar} alt='sample avatar' />
        <textarea
          rows={4}
          placeholder='Type your message...'
          className='addCommentInput'
        />
        <div className='addCommentNote'>
          <div className='addCommentTooltip'>
            <InfoCircle className='addCommentTooltip' color='#bbb' />
            <span className='addCommentTooltipText'>
              But please don't try to inject any JavaScript...
            </span>
          </div>
          <span>Some HTML is OK.</span>
        </div>
        <button onClick={() => {}} className='addCommentButton'>
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
