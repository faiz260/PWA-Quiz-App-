import firebase from "firebase";

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyADGfwVDL6YvSAG8bV2LGJ0kSvNSNGi2HY",
    authDomain: "quiz-app-bf13f.firebaseapp.com",
    databaseURL: "https://quiz-app-bf13f.firebaseio.com",
    projectId: "quiz-app-bf13f",
    storageBucket: "quiz-app-bf13f.appspot.com",
    messagingSenderId: "295971341993",
    appId: "1:295971341993:web:ef09738079c901deab0bb8",
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("Token:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
