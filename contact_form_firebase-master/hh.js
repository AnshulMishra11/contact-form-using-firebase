const firebaseConfig = {
    apiKey: "AIzaSyCK7CSCydqhQjDIKGV-BP4vFHaOgbcc6pM",
    authDomain: "contact2-5ab92.firebaseapp.com",
    projectId: "contact2-5ab92",
    storageBucket: "contact2-5ab92.appspot.com",
    messagingSenderId: "1060912794027",
    appId: "1:1060912794027:web:564ed5941c6da1d8d06aee"
  };

firebase.initializeApp(firebaseConfig);
var data = firebase.database().ref("contact2");

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById('name').value
  const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = data.push();
  newContactForm.set({
    name: name, 
  });
};
  saveMessages(name);
    document.getElementById("contactForm").reset();
}


