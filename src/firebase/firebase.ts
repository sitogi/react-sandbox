import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAgucyUKPDcaHhV1CGNA0seEBY3so7Nsjg',
  authDomain: 'sitogi-react-sandbox.firebaseapp.com',
  projectId: 'sitogi-react-sandbox',
  storageBucket: 'sitogi-react-sandbox.appspot.com',
  messagingSenderId: '1004287935651',
  appId: '1:1004287935651:web:5a45f61379b2b7bf956b16',
  measurementId: 'G-3SPG4M80XX',
};

export const initFirebase = () => {
  initializeApp(firebaseConfig);
};
