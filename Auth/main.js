// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBi_BoecME20C0c2iB4yT-wTrrMwYTUgtk",
//   authDomain: "swasthyabot.firebaseapp.com",
//   projectId: "swasthyabot",
//   storageBucket: "swasthyabot.appspot.com",
//   messagingSenderId: "270789535172",
//   appId: "1:270789535172:web:e016fe19ad78f8fdf0f091"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// const db = getDatabase();

// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const signup = document.getElementById('SignUp');


// function Validation() {
//   console.log("validating")
//   let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;

//   if (emailregex.test(email.value)) {
//     alert("Enter a Valid email!!")
//     return false;
//   }
//   return true;
// }

// function RegisterUser() {
//   if (!Validation()) {
//     return;
//   }
//   const dbRef = ref(db);
//   get(child(dbRef, "UsersList/" + email.value)).then((snapshot) => {
//     if (snapshot.exists()) {
//       alert("Account already exists!!");
//     }

//     else {
//       set(ref(db, "UsersList/" + email.value),
//         {
//           name: name.value,
//           email: email.value,
//           password: password.value

//         })

//         .then(() => {
//           alert("User added successfully");
//         })
//         .catch((error) => {
//           alert("error" + error)
//         })
//     }
//   });
// }
// signup.addEventListener('click', RegisterUser);


































// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCbAE8iJbhOCMr6DawVnLWyWyfDJMhPikw",
//   authDomain: "authentication-e84d5.firebaseapp.com",
//   databaseURL: "https://authentication-e84d5-default-rtdb.firebaseio.com",
//   projectId: "authentication-e84d5",
//   storageBucket: "authentication-e84d5.appspot.com",
//   messagingSenderId: "259291564243",
//   appId: "1:259291564243:web:2ff98bc4f7ccff8af9ac26"
// });

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// const signUp = () => {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Check if email and password are not empty
//   if (!email || !password) {
//     console.log("Please provide both email and password");
//     return;
//   }

//   auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // User successfully registered
//       document.write("Signed Up successfully")
//       console.log("User registered successfully");
//       // You can use userCredential.user to get user details if needed
//     })
//     .catch((error) => {
//       // Handle errors during registration
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.error(errorCode, errorMessage);
//     });
// }


// const logIn = () => {
//   const email = document.getElementById("mail").value;
//   const password = document.getElementById("pass").value;
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // User successfully registered
//       document.write("Logged in successfully")
//       console.log("You're logged in successfully");
//       console.log(userCredential);
//       // You can use userCredential.user to get user details if needed
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.error(errorCode, errorMessage);
//     });
// }
