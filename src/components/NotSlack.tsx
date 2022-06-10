import { useState } from 'react';
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  At,
  Bell,
  ChevronDown,
  Inbox,
  Menu2,
  MoodSmile,
  Plus,
  Search,
  Star,
  X,
} from 'tabler-icons-react';
import s from '../css/NotSlack.module.css';
import Avatar from '../static/Avatar1.jpg';
import Avatar2 from '../static/Avatar2.jpg';
import Avatar3 from '../static/Avatar3.jpg';
import Avatar4 from '../static/Avatar4.jpg';
import Avatar5 from '../static/Avatar5.jpg';
import Avatar6 from '../static/Avatar6.jpg';
import Avatar7 from '../static/Avatar7.jpg';
import Avatar8 from '../static/Avatar8.jpg';
import Avatar9 from '../static/Avatar9.jpg';
import { classes } from '../utils/classes';

function NotSlack2() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  function toggleSidebarCollapsed() {
    setSidebarCollapsed((c) => !c);
  }

  return (
    <div className={s.container}>
      <Sidebar sidebarCollapsed={sidebarCollapsed} />
      <Navbar
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebarCollapsed={toggleSidebarCollapsed}
      />
      <Chat />
      <Compose />
    </div>
  );
}

function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={s.message}>
      <img
        className={s.messageAvatar}
        src={message.avatar}
        alt={`${message.name}'s Avatar`}
      />
      <div className={s.messageInfo}>
        <div className={s.messageName}>{message.name}</div>
        <div className={s.messageTime}>{message.time}</div>
      </div>
      <div className={s.messageText}>{message.text}</div>
    </div>
  );
}

function Sidebar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
  return (
    <div
      className={
        sidebarCollapsed ? classes([s.sidebar, s.sidebarCollapsed]) : s.sidebar
      }
    >
      <div className={s.sidebarInner}>
        <div className={s.sidebarHeader}>
          <div className={s.sidebarHeaderGroup}>
            <div className={s.sidebarHeaderGroupTitle}>Bowen Group</div>
            <ChevronDown size={16} className={s.sidebarHeaderGroupCaret} />
          </div>
          <div className={s.sidebarHeaderPeople}>
            <div className={s.sidebarHeaderOnline} />
            <div className={s.sidebarHeaderPersonName}>Danial Bowen</div>
          </div>
          <div className={s.sidebarHeaderAlert}>
            <Bell className={s.sidebarHeaderAlertIcon} />
            <div className={s.sidebarHeaderAlertCircle} />
          </div>
        </div>
        <div className={s.sidebarInboxes}>
          <div className={s.sidebarInbox}>
            <Inbox className={s.sidebarInboxIcon} />
            <div className={s.sidebarInboxName}>Inbox</div>
          </div>
          <div className={s.sidebarInbox}>
            <Star className={s.sidebarInboxIcon} />
            <div className={s.sidebarInboxName}>Starred</div>
          </div>
        </div>
        <div className={s.sidebarChannels}>
          <div className={s.sidebarChannelsHeader}>CHANNELS</div>
          <div className={s.sidebarChannel}>
            <div className={s.sidebarChannelName}>Design</div>
          </div>
          <div className={s.sidebarChannel}>
            <div className={s.sidebarChannelName}>Engineering</div>
            <div className={s.sidebarChannelUnread}>4</div>
          </div>
          <div className={s.sidebarChannel}>
            <div className={s.sidebarChannelName}>Marketing</div>
          </div>
          <div className={s.sidebarChannel}>
            <div className={s.sidebarChannelName}>Support</div>
          </div>
          <div className={s.sidebarChannel}>
            <div className={s.sidebarChannelName}>Sales</div>
          </div>
          <div className={s.sidebarChannelsNew}>
            <Plus size={18} />
            <div className={s.sidebarChannelsNewText}>New Channel</div>
          </div>
        </div>
        <div className={s.sidebarArchive}>
          <Archive className={s.sidebarArchiveIcon} />
          <div className={s.sidebarArchiveText}>Archived Channels</div>
        </div>
      </div>
    </div>
  );
}

function Navbar({
  sidebarCollapsed,
  toggleSidebarCollapsed,
}: {
  sidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
}) {
  return (
    <div
      className={
        sidebarCollapsed
          ? classes([s.navbarContainer, s.navbarContainerCollapsed])
          : s.navbarContainer
      }
    >
      <div className={s.sidebarHamburger}>
        <Menu2
          onClick={toggleSidebarCollapsed}
          size={26}
          className={
            sidebarCollapsed
              ? classes([
                  s.sidebarHamburgerButton,
                  s.sidebarHamburgerButtonCollapsed,
                ])
              : s.sidebarHamburgerButton
          }
        />
      </div>
      <div
        className={
          sidebarCollapsed ? classes([s.navbar, s.navbarCollapsed]) : s.navbar
        }
      >
        <div className={s.navbarTitle}>Design</div>
        <div className={s.navbarIcons}>
          <Search className={s.greyIcon} />
          <ArrowLeft size={26} className={s.greyIcon} />
          <ArrowRight size={26} className={s.greyIcon} />
        </div>
      </div>
    </div>
  );
}

function Alert() {
  const [alertClasses, setAlertClasses] = useState<string[]>([s.alert]);
  function tempHideAlert() {
    setAlertClasses([s.alert, s.height0]);
    setTimeout(() => setAlertClasses([s.alert]), 3000);
  }

  return (
    <div className={classes(alertClasses)}>
      <div className={s.alertInner}>
        <div className={s.alertLogo}>
          <div className={s.alertLogoInner}>!</div>
        </div>
        <div className={s.alertOops}>Oops!</div>
        <div className={s.alertText}>
          Sorry, there seems to be a problem with your connection.
        </div>
        <X className={s.alertClose} onClick={tempHideAlert} />
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className={s.chat}>
      {/* <Alert /> */}
      {messages.map((message) => (
        <ChatMessage message={message} />
      ))}
    </div>
  );
}

function Compose() {
  return (
    <div className={s.compose}>
      <input className={s.composeInput} placeholder='Type your message' />
      <div className={s.composeIcons}>
        <At className={s.greyIcon} />
        <MoodSmile className={s.greyIcon} />
      </div>
    </div>
  );
}

export type Message = {
  avatar: string;
  name: string;
  time: string;
  text: React.ReactNode;
};

export const messages: Message[] = [
  {
    avatar: Avatar,
    name: 'Andreas Kling',
    time: '12:44 PM',
    text: (
      <>
        <span>@Samantha</span> yep! I put a few photos in the shared folder. Let
        me know if you have any questions.
      </>
    ),
  },
  {
    avatar: Avatar8,
    name: 'Samantha Ramos',
    time: '12:31 PM',
    text: (
      <>
        Looking forward to tomorrow! Could someone upload photos of the venue?
      </>
    ),
  },
  {
    avatar: Avatar5,
    name: 'Steven	Gibson',
    time: '12:11 PM',
    text: (
      <>
        Checked out the venue today with <span>@Andreas</span>, looks great!
      </>
    ),
  },
  {
    avatar: Avatar4,
    name: 'Dan Bower',
    time: '11:31 AM',
    text: (
      <>
        <div>We only have a few tasks left to do:</div>
        <div>- Make sure the venue is ok</div>
        <div>- Order food</div>
        <div>- Bake a cake</div>
        <div>- Send out invitations</div>
      </>
    ),
  },
  {
    avatar: Avatar3,
    name: 'Gavin Chapman',
    time: '11:29 AM',
    text: (
      <>
        Hey design team, how are the preparations for the birthday party going?
      </>
    ),
  },
  {
    avatar: Avatar2,
    name: 'Olivia',
    time: '11:15 AM',
    text: (
      <>
        Thanks for yesterday's meeting. Was good to see how the product is
        coming along. Let's have a similar meeting next week.
      </>
    ),
  },
  {
    avatar: Avatar8,
    name: 'Samantha Ramos',
    time: '11:01 AM',
    text: (
      <>
        Follow up on the meeting: Just got the confirmation from our client that
        they're happy with the project files and want to proceed as planned :)
      </>
    ),
  },
  {
    avatar: Avatar9,
    name: 'Tiffany Myers',
    time: '10:43 AM',
    text: (
      <>
        <span>@samantharamos</span> yep! I put a few photos in the shared
        folder. Let me know if you have any questions.
      </>
    ),
  },
  {
    avatar: Avatar,
    name: 'Tiffany Myers',
    time: '10:32 AM',
    text: (
      <>
        <span>@samantharamos</span> yep! I put a few photos in the shared
        folder. Let me know if you have any questions.
      </>
    ),
  },
  {
    avatar: Avatar,
    name: 'Tiffany Myers',
    time: '10:28 AM',
    text: (
      <>
        <span>@samantharamos</span> yep! I put a few photos in the shared
        folder. Let me know if you have any questions.
      </>
    ),
  },
  {
    avatar: Avatar,
    name: 'Tiffany Myers',
    time: '10:21 AM',
    text: (
      <>
        <span>@samantharamos</span> yep! I put a few photos in the shared
        folder. Let me know if you have any questions.
      </>
    ),
  },
  {
    avatar: Avatar,
    name: 'Tiffany Myers',
    time: '9:30 AM',
    text: (
      <>
        <span>@samantharamos</span> yep! I put a few photos in the shared
        folder. Let me know if you have any questions.
      </>
    ),
  },
];

export default NotSlack2;
