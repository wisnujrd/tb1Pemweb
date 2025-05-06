function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    (username === "Wisnu Jarodi" || username === "Bimo Arya") &&
    password === "user123"
  ) {
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("username", username);
    window.location.href = "elearning.html";
  } else {
    alert("Username atau password salah!");
  }
  return false;
}

function logoutUser() {
  sessionStorage.clear();
  window.location.href = "home.html";
}

function goToElearning() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.open("elearning.html", "_blank");
  } else {
    window.open("login.html", "_blank");
  }
}
