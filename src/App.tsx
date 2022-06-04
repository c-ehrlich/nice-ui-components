import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'tabler-icons-react';
import './App.css';
import AddComment from './components/AddComment';
import BookEvent from './components/BookEvent';
import ChitChat from './components/ChitChat';
import Contacts from './components/Contacts';

type Page = {
  component: React.ReactNode;
  url: string;
  name: string;
};

const pages: Page[] = [
  { component: <Contacts />, url: 'contacts', name: 'Contacts' },
  { component: <BookEvent />, url: 'bookevent', name: 'Book Event' },
  { component: <ChitChat />, url: 'chitchat', name: 'Chat' },
  { component: <AddComment />, url: 'addcomment', name: 'Add Comment' },
];

function App() {
  const [page, setPage] = useState<number>(0);
  function nextPage() {
    setPage((p) => (p < pages.length - 1 ? ++p : 0));
  }
  function prevPage() {
    setPage((p) => (p !== 0 ? --p : pages.length - 1));
  }
  return (
    <div className='App'>
      <div className='pagePicker'>
        <div className='pagePickerInner'>
          <div tabIndex={0} className='navButton'>
            <ArrowBigLeft size={24} className='navArrow' onClick={prevPage} />
          </div>
          <div className='navText'>
            {pages[page].name}
            <span className='navTextLight'>
              {' '}
              ({page + 1}/{pages.length})
            </span>
          </div>
          <div tabIndex={0} className='navButton'>
            <ArrowBigRight size={24} className='navArrow' onClick={nextPage} />
          </div>
        </div>
      </div>
      <div className='content'>{pages[page].component}</div>
    </div>
  );
}

export default App;
