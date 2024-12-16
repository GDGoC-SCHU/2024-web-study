const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  callGreeings(userName);
}

function callGreeings(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsers = localStorage.getItem(USERNAME_KEY);

if (savedUsers === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  callGreeings(savedUsers);
}
