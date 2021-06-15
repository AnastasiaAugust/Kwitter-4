//YOUR FIREBASE LINKS
// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later,measurementId is optional 
var firebaseConfig = {
    apiKey: "AIzaSyBDeF-O9YKecVu5cpcYbxzP7y0uY18bmB4",
    authDomain: "kwitter-36ac1.firebaseapp.com",
    databaseURL: "https://kwitter-36ac1-default-rtdb.firebaseio.com",
    projectId: "kwitter-36ac1",
    storageBucket: "kwitter-36ac1.appspot.com",
    messagingSenderId: "399806602887",
    appId: "1:399806602887:web:e666ca93cc29795d7e2222",
    measurementId: "G-T6ZCBTN9DB"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0

    });

    document.getElementById("msg").value = "";
}