 import * as firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyDWK0Pm5U-j51Ud3e5XYVtYujfomwIWqds",
    authDomain: "school-attendence-app-d9568.firebaseapp.com",
    databaseURL: "https://school-attendence-app-d9568-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-d9568",
    storageBucket: "school-attendence-app-d9568.appspot.com",
    messagingSenderId: "1058668757179",
    appId: "1:1058668757179:web:865fdfe363f4021019299e"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 
console.log(firebase.name);
console.log(firebase.database());
 
 

  