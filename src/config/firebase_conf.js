// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAH90KgvtrdjIHL0WWxw_FXm9NUI_qpEdw",
  authDomain: "topplan-5e384.firebaseapp.com",
  databaseURL: "https://topplan-5e384.firebaseio.com",
  projectId: "topplan-5e384",
  storageBucket: "topplan-5e384.appspot.com",
  messagingSenderId: "574557189202",
  appId: "1:574557189202:web:9e9f70ddc24f1ddef89b8b",
  measurementId: "G-H4D0BVPPYD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
