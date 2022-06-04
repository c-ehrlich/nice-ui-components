import { useMemo, useState } from 'react';
import { Search } from 'tabler-icons-react';
import styles from '../css/Contacts.module.css';

type Contact = {
  name: string;
  online: boolean;
  role: 'Member' | 'Team';
};

const contacts: Contact[] = [
  { name: 'Tighten Co.', online: true, role: 'Team' },
  { name: 'Taylor Otwell', online: true, role: 'Member' },
  { name: 'Adam Wathan', online: true, role: 'Member' },
  { name: 'Duke Street Studios, Inc', online: true, role: 'Member' },
  { name: 'Jeffrey Way', online: true, role: 'Member' },
  { name: 'HN Ltd.', online: false, role: 'Team' },
  { name: 'Itazura Inc.', online: false, role: 'Team' },
  { name: 'Lucas Duncan', online: false, role: 'Member' },
  { name: 'Bella Harris', online: false, role: 'Member' },
  { name: 'Richard Mathis', online: false, role: 'Member' },
  { name: 'Alison Black', online: false, role: 'Member' },
  { name: 'Jennifer Graham', online: false, role: 'Member' },
  { name: 'Pippa Graham', online: false, role: 'Member' },
  { name: 'Carolyn Bond', online: false, role: 'Member' },
  { name: 'Gavin Dowd', online: false, role: 'Member' },
  { name: 'Kylie Alsop', online: false, role: 'Member' },
  { name: 'Leah Hamilton', online: false, role: 'Member' },
];

function Contacts() {
  const [search, setSearch] = useState<string>('');

  const sortedContacts = useMemo(() => {
    return contacts.filter(
      (c) =>
        c.name.toLocaleLowerCase().search(search.toLocaleLowerCase()) !== -1
    );
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <div className={styles.headerText}>Contacts</div>
          <div className={styles.search}>
            <input
              className={styles.searchInput}
              value={search}
              placeholder='Search teams or members...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search size={20} className={styles.searchIcon} />
          </div>
          <div className={styles.contactList}>
            {sortedContacts.map((c) => (
              <div className={styles.contact}>
                <div
                  className={
                    c.online ? styles.onlineBullet : styles.offlineBullet
                  }
                />
                <div className={styles.contactData}>
                  <span className={styles.contactName}>{c.name}</span>
                  <span className={styles.contactRole}>{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.invite}>Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
