import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../firebase/client';

export const fileHandler = async (file, path) => {
  const fileRef = ref(storage, `${path}/${file.name}`);
  const uploadTask = await uploadBytes(fileRef, file);
  const downloadURL = await getDownloadURL(fileRef);

  return downloadURL;
};
