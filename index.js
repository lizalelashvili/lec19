function validate() {
    const idLenght = document.getElementById("id_number").value;
  
    const password = document.getElementById("password").value;
  
    const repeat_password = document.getElementById("repeat_password").value;
  
    let emailId = document.myForm.Email.value;
    atpos = emailId.indexOf("@");
    dotpos = emailId.lastIndexOf(".");
  
    if (emailId == "") {
      alert("Enter email");
      return false;
    } else {
      if (atpos < 1 || dotpos - atpos < 2) {
        alert("Email is invalid");
        document.myForm.Email.focus();
        return false;
      }
    }
  
    if (document.myForm.id_number.value == "") {
      alert("Enter ID number");
      document.myForm.id_number.focus();
      return false;
    }
  
    if (isNaN(document.myForm.id_number.value)) {
      alert("The id number must be in numeric format");
      document.myForm.id_number.focus();
      return false;
    }
  
    if (idlenght.length != 11) {
      alert("ID number must be 11 digits");
      return false;
    }
  
    if (password == "") {
      alert("Enter Password");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be longer than 6 characters");
      return false;
    }
  
    if (password != repeat_password) {
      alert("Repeat the password");
      return false;
    }
  
    return true;
  }