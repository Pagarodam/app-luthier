import { useState, useEffect } from 'react';
import WoodForm from '../../components/woods/woodForm';
import WoodsList from '../../components/woods/woodsList';
import styles from '../../styles/Home.module.css';

export default function Gallery() {
  const [woods, setWoods] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    if (refetch) {
      fetch('http://localhost:3001/woods')
        .then((res) => res.json())
        .then((woods) => setWoods(woods))
        .finally(() => setRefetch(false));
    }

  }, [refetch]);

  const handleWoodAdded = () => {
    // setWoods([...woods, newWood]);
    setRefetch(true);
  };

  const handleWoodDeleted = (woodId) => {
    setWoods([...woods.filter((wood) => wood.id !== woodId)]);
  }

  return (
    <div className={styles.container}>
      <div>
        <WoodForm onWoodAdded={handleWoodAdded}/>
        <WoodsList woods={woods} onWoodDeleted={handleWoodDeleted} />
      </div>
    </div>
  );
}
