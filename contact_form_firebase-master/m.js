const firebaseConfig = {
    apiKey: "AIzaSyDqC9LhMHsc9YVMHGOO1z2pqmfMJBzt9-Y",
    authDomain: "contact-a998d.firebaseapp.com",
    databaseURL: "https://contact-a998d-default-rtdb.firebaseio.com",
    projectId: "contact-a998d",
    storageBucket: "contact-a998d.appspot.com",
    messagingSenderId: "547791479826",
    appId: "1:547791479826:web:558df2eccbf30c7a6264cb"
  };
  
firebase.initializeApp(firebaseConfig)
//reference ,kaha data store hoga 
const data = firebase.databaseURL().ref('contactForm')
function submitForm(e){
    e.preventDefault()
    let name = document.getElementById('name').value
    let emailid = document.getElementById('emailid').value
    let msgContent = document.getElementById('msgContent').value

    const savedata =(name,emailid,msgContent)=>{

        var newContactForm = data.push()
        newContactForm.set({
            name : name,
            email : emailid,
            message : msgContent
        })
    }
    savedata(name,emailid,msgContent)
    

    document.querySelector(".alert").style.display = "block"
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none"
    },4000)
    document.getElementById("contactForm").reset();
}
document.getElementById('contactForm').addEventListener('submit',submitForm)