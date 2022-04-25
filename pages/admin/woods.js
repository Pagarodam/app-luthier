import WoodForm from '../../components/woods/woodForm';
import WoodsList from '../../components/woods/woodsList';
import styles from '../../styles/Home.module.css';

export default function Gallery() {
  return (
    <div className={styles.container}>
      <div>
        <WoodForm />
        <WoodsList />
      </div>
    </div>
  );
}
