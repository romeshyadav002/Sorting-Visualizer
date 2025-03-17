// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDbgR6UOkMe9pUcLICoDcagfzT7fK9ykSo',
  authDomain: 'sorting-visualizer-007.firebaseapp.com',
  projectId: 'sorting-visualizer-007',
  storageBucket: 'sorting-visualizer-007.appspot.com',
  messagingSenderId: '979899677428',
  appId: '1:979899677428:web:6155b54245a7d1ed7b7ca1',
  measurementId: 'G-DC90Q6MMZQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
