/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyBY4SdrAWhDiG8fNEK_cQSg_9dY_mN2-Ic",
  authDomain: "sals-strawberry.firebaseapp.com",
  databaseURL: "https://sals-strawberry-default-rtdb.firebaseio.com",
  projectId: "sals-strawberry",
  storageBucket: "sals-strawberry.firebasestorage.app",
  messagingSenderId: "152697613612",
  appId: "1:152697613612:web:1455f9cdab19a81b915089"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// This log prints the firebase object to the console to show that it is working.
// As soon as you have the script working, delete this log.
console.log("Firebase initialize finished:");
console.log(firebase);