importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyADGfwVDL6YvSAG8bV2LGJ0kSvNSNGi2HY",
  authDomain: "quiz-app-bf13f.firebaseapp.com",
  databaseURL: "https://quiz-app-bf13f.firebaseio.com",
  projectId: "quiz-app-bf13f",
  storageBucket: "quiz-app-bf13f.appspot.com",
  messagingSenderId: "295971341993",
  appId: "1:295971341993:web:ef09738079c901deab0bb8",
});

const messaging = firebase.messaging();
