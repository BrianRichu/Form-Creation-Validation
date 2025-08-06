
  document.addEventListener("DOMContentLoaded",function (){
    const form = document.getElementById('registration- form');
    const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', (event)=>{
      event.preventDefault();

      let isValid = true;
      let messages = [];
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();



    if (username.length < 3) {
      isValid = false;
      messages.push("Enter a valid Username");
    }

    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Email must contain @ and .");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Minimum password length is 8");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";

    }else{
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
  });