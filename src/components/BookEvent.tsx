import styles from '../css/BookEvent.module.css';
import Amsterdam from '../static/Amsterdam.jpg';

function BookEvent() {
  return (
    <div className={styles.container}>
      <div className={styles.bookEvent}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={Amsterdam} alt='Amsterdam Walking Tour' />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>Amsterdam Walking Tour</h2>
          <p className={styles.subTitle}>
            Explore popular tourist destinations as well as hidden local
            favorites
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.price}>
            <span className={styles.priceCost}>$17</span> per person*
          </div>
          <div className={styles.reviews}>
            <span className={styles.reviewStars}>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
            </span>
            <span className={styles.reviewCount}>28 reviews</span>
          </div>
          <button className={styles.bookButton}>Book now</button>
          <div className={styles.note}>
            *Prices may vary depending on selected date.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookEvent;
