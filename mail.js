const firebaseConfig = {
    apiKey: "AIzaSyBBJKBb4FjkzoLiEzPis5n7NC1XcPd5HcU",
    authDomain: "fyp-ia.firebaseapp.com",
    databaseURL: "https://fyp-ia-default-rtdb.firebaseio.com" ,
    projectId: "fyp-ia",
    storageBucket: "fyp-ia.appspot.com",
    messagingSenderId: "738002155433",
    appId: "1:738002155433:web:f9aeaf43309b278e4d76b8"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};