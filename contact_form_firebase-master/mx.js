const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "contact-a998d.appspot.com",
    messagingSenderId: "547791479826",
    appId: ""
  };

firebase.initializeApp(firebaseConfig);
//isse yha initialize karna hai 

let data = firebase.database().ref("contactForm"); 
//ye contactform naam se collection bana dega aur agar phle se exist karega  to data ussi me hi load kar dega 



function submitfunc(e) {
  e.preventDefault(); 
  //isse koi jydda fark nhi padta hai bss alert me thoda dikhta hai 

  let name = document.getElementById('name').value
  let emailid = document.getElementById('emailid').value
  let msgContent = document.getElementById('msgContent').value
  
  const saveMessages = (x,y,z) => {
    let newContactForm = data.push();

    newContactForm.set({
        "name": x,
        "emailid": y,
        "msgContent": z
        
    });
};
  saveMessages(name, emailid, msgContent);
  document.querySelector(".alert").style.display = "block"
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none"
    },4000)

    
}

document.getElementById("contactForm").addEventListener("submit", submitfunc);
