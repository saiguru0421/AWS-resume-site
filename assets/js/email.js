(function(){
    emailjs.init("YOUR_USER_ID");
})();

function sendEmail() {
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_rcah6mj', 'template_v51ravt', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Message sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Failed to send the message. Please try again.');
        });
}
