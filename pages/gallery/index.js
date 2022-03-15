import Images from '../../components/gallery';
import Nav from '../../components/nav';
import styles from '../../styles/Home.module.css'



export default function Gallery(){
  return (
    <>
    <div className={styles.container}>
      <Nav/>
      <div>
        <Images/>
      </div>
    </div>
  </>
  )
}