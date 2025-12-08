function register() {
  let user = {
    name: document.getElementById("regName").value,
    email: document.getElementById("regEmail").value,
    phone: document.getElementById("regPhone").value,
    role: document.getElementById("regRole").value,
    pass: document.getElementById("regPass").value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered Successfully!");
  window.location.href = "login.html";
}

function login() {
  let saved = JSON.parse(localStorage.getItem("user"));

  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  if (saved && email === saved.email && pass === saved.pass) {
    window.location.href = "home.html";
  } else {
    alert("Wrong Email or Password");
  }
}