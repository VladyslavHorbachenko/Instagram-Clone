import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCLsd9ZSZIQk_trRuzC5Je68WwiCFZn9go",
        authDomain: "instargram-clone-react-d9a29.firebaseapp.com",
        databaseURL: "https://instargram-clone-react-d9a29.firebaseio.com",
        projectId: "instargram-clone-react-d9a29",
        storageBucket: "instargram-clone-react-d9a29.appspot.com",
        messagingSenderId: "1051495486731",
        appId: "1:1051495486731:web:84075efa2d464666f8fe0e",
        measurementId: "G-5VRHGQH8Y8"
})

const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage}