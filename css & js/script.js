function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Wisnu Jarodi" && password === "user123") {
    localStorage.setItem("isLoggedIn", "true");
    window.open("elearning.html", "_blank");
  } else {
    alert("Username atau password salah!");
  }
  return false;
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "home.html";
}

function goToElearning() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.open("elearning.html", "_blank");
  } else {
    window.open("login.html", "_blank");
  }
}
