const firebaseConfig = {
    apiKey: "AIzaSyDqC9LhMHsc9YVMHGOO1z2pqmfMJBzt9-Y",
    authDomain: "contact-a998d.firebaseapp.com",
    databaseURL: "https://contact-a998d-default-rtdb.firebaseio.com",
    projectId: "contact-a998d",
    storageBucket: "contact-a998d.appspot.com",
    messagingSenderId: "547791479826",
    appId: "1:547791479826:web:558df2eccbf30c7a6264cb"
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
