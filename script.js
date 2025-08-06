const form = document.getElementById('registration-form');

form.addEventListener('submit',(event)=>{
event.preventDefault();
 
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

let isValid = true;
let messages = [];

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
const feedback = document.getElementById('form-feedback');
feedback.style.display = "block";
 if (isValid) {
  feedback.textContent = "Registration successful!";
  feedback.style.color = "#28a745";

 }else{
  feedback.innerHTML = messages.join("<br>");
  feedback.style.color = "#dc3545";
 }
})