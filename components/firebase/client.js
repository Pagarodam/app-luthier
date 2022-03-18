import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlSBRBO1fzm9bVG8dfHld-1ay82iRYK_4',
  authDomain: 'pruebaauth-3639d.firebaseapp.com',
  projectId: 'pruebaauth-3639d',
  storageBucket: 'pruebaauth-3639d.appspot.com',
  messagingSenderId: '415322481596',
  appId: '1:415322481596:web:efeeb98bc8ac7b0b88c1b9',
  measurementId: 'G-F8D7L7DD2Y',
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const firestore = getFirestore(app);

/*
*********Manual de uso de Firebase************

Fuente: https://www.freecodecamp.org/news/nextjs-firebase-tutorial-build-an-evernote-clone/

Documentación: https://firebase.google.com/docs/firestore/

 Ahora donde quieras crear meter una colección:
  import { collection, addDoc } from 'firebase/firestore';

 declaras la colección:
  const coleccion = collection(firestore, 'coleccion');

 y para añadir un documento:
  const documento = addDoc(coleccion, {
    nombre: 'nombre',
    calidad: 'calidad',
    precio: 'precio',
    ...
  });

 Si no está creada la colección se crea automáticamente.

 Estas son las magias de Firebase:
  - collection: crea una colección
  - addDoc: añade un documento a una colección
  - getDoc: obtiene un documento de una colección
  - getCollection: obtiene una colección
  - updateDoc: actualiza un documento de una colección
  - deleteDoc: borra un documento de una colección
  - deleteCollection: borra una colección
  - onSnapshot: escucha los cambios de una colección
 */
