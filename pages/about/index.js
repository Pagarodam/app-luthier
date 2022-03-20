import Nav from "../../components/nav";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <h1>José Llamas, Guitarras artesanas</h1>
     <section>

       <article>
        <h3>
          Guitarras hechas a mano como se fabricaron las primeras guitarras
        </h3>
         Pequeña empresa de guitarras por pedido, nos hemos preocupado por la fabricación de guitarras de la manera mas artesanal posible. Cada guitarra es unica y las maderas usadas
         las tratamos como lo que son, seres vivos que necesitán respirar y cariño.
       </article>
       <article>
         <h3>
           Fabricadas bajo demanda y con los materiales que tu elijas
         </h3>
         Las guitarras se crean según tus gustos y necesidades y siempre contaras con el consejo de nuestros luthiers.
       </article>

     </section>
       {/* <aside>
         <image
              alt='logo'
              src='/../../public/Logo Llamas.jpeg'
              title=''
              height={400}
              width={600}
        />
       </aside> */}
    </div>
  );
}
