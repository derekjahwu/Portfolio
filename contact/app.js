var firebaseConfig = {
    apiKey: "AIzaSyA4F4L9ZACrErU2eaeVnPLG5GYdhOHBV1A",
    authDomain: "portfolio-contact-form-4acb5.firebaseapp.com",
    projectId: "portfolio-contact-form-4acb5",
    storageBucket: "portfolio-contact-form-4acb5.appspot.com",
    messagingSenderId: "596989709490",
    appId: "1:596989709490:web:512103acf1f95df298cdab"
  };

firebase.initializeApp(firebaseConfig);

// reference contactInfo collection

let contactInfo = firebase.database().ref("infos");

 //Listen for submit event
 document.querySelector('.contact-form').addEventListener('submit', submitForm);
 
 
 function submitForm(e){
     e.preventDefault();

     //Get Input Values
     let name = document.querySelector('.name').value;
     let email = document.querySelector('.email').value;
     let message = document.querySelector('.message').value;

     saveContactInfo(name, email, message);

     document.querySelector('.contact-form').reset();

     sendEmail(name, email, message)
 }

 //save infos to firebase
 function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
 }

 //send email Info
 function sendEmail(name, email, message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "derekjwu96@gmail.com",
        Password : "iguqfdiafowecknm",
        To : 'derekjwu96@gmail.com',
        From : 'derekjwu96@gmail.com',
        Subject : `${name} has sent you a message`,
        Body : `name: ${name} <br/> Email: ${email} <br/> Message ${message}`,

    }).then(
      message => alert('Email had been successfully sent')
    );
 }

