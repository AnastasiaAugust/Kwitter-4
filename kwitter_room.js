// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjN2NUuCup_7Wr2NOp5TG9tBX2UGFDpJA",
    authDomain: "kwitter-8cc7b.firebaseapp.com",
    projectId: "kwitter-8cc7b",
    storageBucket: "kwitter-8cc7b.appspot.com",
    messagingSenderId: "898375821523",
    appId: "1:898375821523:web:0e455d4443704898224c26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose = "adding room name"
    });
}

localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";

//ADD YOUR FIREBASE LINKS HERE
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childsnapshot) {
                childKey = childsnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}