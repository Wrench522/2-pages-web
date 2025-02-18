function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    
    if (name === "" || age === "" || email === "" || course === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Details submitted");
           
    return true;
}

function viewPage(){

    alert("    YOU HAVE VIEWED PAGE 2  ");
    window.onload = viewPage;
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

    function toggleNav() {
        var nav = document.getElementById("navbar");
        nav.classList.toggle("hidden");
    }
