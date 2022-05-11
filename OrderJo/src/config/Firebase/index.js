import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCI4NYHybsmO6G8YHHMJkkmBfwZbqeYIZc',
  authDomain: 'orderjo-8e09e.firebaseapp.com',
  databaseURL: 'https://orderjo-8e09e-default-rtdb.firebaseio.com',
  projectId: 'orderjo-8e09e',
  storageBucket: 'orderjo-8e09e.appspot.com',
  messagingSenderId: '69578307358',
  appId: '1:69578307358:web:fa24cae7c00099dc033b0f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);