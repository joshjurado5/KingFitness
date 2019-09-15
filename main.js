// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuzy0CaLwF-mmjGJ4K0v-U_G0nYZTB6lc",
    authDomain: "kingfitness-contact-form.firebaseapp.com",
    databaseURL: "https://kingfitness-contact-form.firebaseio.com",
    projectId: "kingfitness-contact-form",
    storageBucket: "",
    messagingSenderId: "925720533404",
    appId: "1:925720533404:web:705a91308b6dc209"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, phone, email, message);

    // show alert
    document.querySelector('.alert').style.display = 'inline-block';

    // Hide alert after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contact-form').reset();

}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save mesage to firebase
function saveMessage(name, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        email: email,
        message: message
    })
}

let burger = document.querySelector('.burger');
let links = document.querySelector('.nav-container ul');
let liLinks = document.querySelectorAll('.nav-container ul li a');

burger.addEventListener('click', () => {
    links.style.display = 'block';
    burger.style.display = 'none';
})

liLinks.addEventListener('click', () => {
    links.style.display = 'none';
    burger.style.display = 'block';
})
