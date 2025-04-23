const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || emailValue === null) {
    alert("Email is required");
    return;
  }

  if (passwordValue === "" || passwordValue === null) {
    alert("Password is required");
    return;
  }

  // If all good
  alert("Login successful!");
  // You can redirect or handle login here
  // window.location.href = "dashboard.html";
});