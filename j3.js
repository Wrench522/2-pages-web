function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("course").value;
    
    if (name === "" || age === "" || email === "" || number === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Details submitted");
           
    return true;
}


 

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function submitDetails() {
  
        alert("   DETAILS SUBMITTED");
      
    }

 


