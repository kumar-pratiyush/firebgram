import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyD549b7ZxJdITWsLmkVTEXiFxVPuQo_Uxs",
//     authDomain: "pratiyushfiregallery.firebaseapp.com",
//     projectId: "pratiyushfiregallery",
//     storageBucket: "pratiyushfiregallery.appspot.com",
//     messagingSenderId: "131205880745",
//     appId: "1:131205880745:web:0f6d288158a0cd359fc2b8"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
    apiKey: "AIzaSyANHTmKYb-eFRVGnBs4n6PA7DO-64ZBaVk",
    authDomain: "store-b16f3.firebaseapp.com",
    projectId: "store-b16f3",
    storageBucket: "store-b16f3.appspot.com",
    messagingSenderId: "443371213231",
    appId: "1:443371213231:web:5f7b62efef04eccb5f9f5a",
    measurementId: "G-2EJQE5BPSZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };