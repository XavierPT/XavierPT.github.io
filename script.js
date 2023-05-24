function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var terms = document.getElementById("terms").checked;
  
    if (username === "" || password === "" || email === "" || !terms) {
      alert("Please enter all required fields and agree to the terms of service.");
      return false;
    }
  
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("submit").onclick = validateForm;