const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUpForm = document.getElementById("signUpForm");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

signUpForm.addEventListener("submit", function (event) {
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  let valid = true;

  // Validação de e-mail
  if (!validateEmail(email)) {
    emailError.textContent = "E-mail inválido!";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validação de senha
  if (!validatePassword(password)) {
    passwordError.textContent =
      "A senha deve ter pelo menos 6 caracteres, incluindo letras e números.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return re.test(password);
}
