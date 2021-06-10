import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.wrap}>
    <Loader
      type="BallTriangle"
      color="#26a69a"
      height={60}
      width={60}
      visible={true}
    />
  </div>
);

export default Spinner;
