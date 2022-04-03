import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBlSBRBO1fzm9bVG8dfHld-1ay82iRYK_4',
  authDomain: 'pruebaauth-3639d.firebaseapp.com',
  projectId: 'pruebaauth-3639d',
  storageBucket: 'gs://pruebaauth-3639d.appspot.com/',
  messagingSenderId: '415322481596',
  appId: '1:415322481596:web:efeeb98bc8ac7b0b88c1b9',
  measurementId: 'G-F8D7L7DD2Y',
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { authentication, firestore, storage };
