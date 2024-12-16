importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBUziL18MnZOGgviTaHb3H02Ei9P_RP6-0",
    authDomain: "radar-system-4b06b.firebaseapp.com",
    projectId: "radar-system-4b06b",
    storageBucket: "radar-system-4b06b.firebasestorage.app",
    messagingSenderId: "600285062891",
    appId: "1:600285062891:web:5f731d544137367dfbc0ae"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
