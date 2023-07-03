document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent Default form submission

    //Get Newsletter form data

    var email = document.getElementById("email").value;

    var formData = {
        "email": email,
    };


    var jsonData = JSON.stringify(formData);
    
    sendData(jsonData); 

});

function sendData