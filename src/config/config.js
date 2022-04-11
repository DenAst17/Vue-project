import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6GuA5PduyHkBw9az7BrY01WqB_s51rp8",
    authDomain: "vue-project-68771.firebaseapp.com",
    projectId: "vue-project-68771",
    storageBucket: "vue-project-68771.appspot.com",
    messagingSenderId: "283180840615",
    appId: "1:283180840615:web:1f03a387850d24006d8d82",
    measurementId: "G-G98SXQDCE6"
};

const firebase = initializeApp(firebaseConfig); // деструктуризація object destruction

export{firebase};