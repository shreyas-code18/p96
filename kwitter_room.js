// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBRm6kDecuHVsAVdDKJhUBrQ3lPP_Oumw",
  authDomain: "kwitter-9e499.firebaseapp.com",
  databaseURL: "https://kwitter-9e499-default-rtdb.firebaseio.com",
  projectId: "kwitter-9e499",
  storageBucket: "kwitter-9e499.appspot.com",
  messagingSenderId: "233432046998",
  appId: "1:233432046998:web:a6428918577923863811b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class = 'room_name' id="+Room_names+"omclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
