import styles from './CurrentLocation.module.scss';

const CurrentLocation = ({currentCity}) => (
      <div className={styles.root}>
        {`Current location: ${currentCity}`}
      </div>
);

export default CurrentLocation;