import { useState } from 'react';
import { Bath, Bed, Heart } from 'tabler-icons-react';
import styles from '../css/Apartment.module.css';
import apartment from '../static/Apartment.jpg';
import { classes } from '../utils/classes';
import Avatar from '../static/Avatar1.jpg'

function Apartment() {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <img src={apartment} alt='Apartment' className={styles.photo} />
          <Heart
            className={
              liked
                ? styles.heartIcon
                : classes([styles.heartIcon, styles.heartIconLiked])
            }
            onClick={() => setLiked((l) => !l)}
          />
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.houseType}>Apartment Unit • 1,826 Sqft</div>
          <h2 className={styles.price}>$1,250,000</h2>
          <div className={styles.address}>742 Evergreen Terrace</div>
        </div>
        <div className={styles.rooms}>
          <div className={styles.roomsCategory}>
            <Bed className={styles.roomsIcon} />
            <div className={styles.roomsDescription}>
              <span className={styles.roomsCount}>3</span> Bedrooms
            </div>
          </div>
          <div className={styles.roomsCategory}>
            <Bath className={styles.roomsIcon} />
            <div className={styles.roomsDescription}>
              <span className={styles.roomsCount}>2</span> Bathrooms
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <img src={Avatar} alt='Tiffany Heffner' className={styles.contactImage} />
          <div className={styles.contactName}>Andreas Kling</div>
          <div className={styles.contactPhone}>(555) 555-4321</div>
        </div>
        <button className={styles.scheduleButton}>SCHEDULE SHOWING  {' >'}</button>
      </div>
    </div>
  );
}

export default Apartment;
