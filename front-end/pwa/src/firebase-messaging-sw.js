importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyANA88TLO0ienRRh30niaEbhjieZxxJY_c",
    authDomain: "teste-f073f.firebaseapp.com",
    databaseURL: "https://teste-f073f.firebaseio.com",
    projectId: "teste-f073f",
    storageBucket: "teste-f073f.appspot.com",
    messagingSenderId: "872463725757"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World PWA';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});