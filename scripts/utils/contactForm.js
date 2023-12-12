const displayModal = () => {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
};

const closeModal = () => {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
};

const checkFirstName = () => {
  const firstName = document.getElementById("first_name");

  if (firstName.value.trim() === "") {
    let message = "Merci de remplir ce champs";
    setError(firstName, message);
  } else {
    setSucces(firstName);
    return true;
  }
};

const checkLastName = () => {
  const lastName = document.getElementById("last_name");

  if (lastName.value.trim() === "") {
    let message = "Merci de remplir ce champs";
    setError(lastName, message);
  } else {
    setSucces(lastName);
    return true;
  }
};

const checkEmail = () => {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  if (emailValue == "") {
    let message = "Merci de remplir ce champs";
    setError(email, message);
    return false;
  } else if (!emailValid(emailValue)) {
    let message = "Votre e-mail n'est pas valide";
    setError(email, message);
    return false;
  } else {
    setSucces(email);
    return true;
  }
};

const emailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const setError = (elem, message) => {
  const formData = elem.parentElement;
  const error = formData.querySelector(".errorMessage");

  error.innerText = message;

  elem.classList.remove("success");
  elem.classList.add("error");
};

const setSucces = (elem) => {
  const formData = elem.parentElement;
  const error = formData.querySelector(".errorMessage");
  error.textContent = "";

  elem.classList.remove("error");
  elem.classList.add("success");
};
const displayForm = (name) => {
  const modal = document.getElementById("modal");

  let form = "";

  form += `
  <div id="contact_modal">
    <div class="modal">
      <header>
      <div class="contact">
        <h2>Contactez-moi</h2>
        <h2>${name}</h2>
        </div>
        <img src="assets/icons/close.svg" onclick="closeModal()" />
        </header>
      <form id="contact_Photograph" role="form" action="" method="">
        <div role="group" aria-labelledby="coordonnees">
        <div class="formData">
          <label for="first_name" tabindex="0">Prénom</label>
          <input type="text" name="first_name" id="first_name" aria-required="true" minlength="2" tabindex="0" />
          <p class="errorMessage"></p>
          </div>
          <div class="formData">
          <label for="last_name" tabindex="0">Nom</label>
          <input type="text" name="last_name" id="last_name" aria-required="true" minlength="2" tabindex="0" />
          <p class="errorMessage"></p>
          </div>
          <div class="formData">
          <label for="email" tabindex="0">Email</label>
          <input type="email" name="email" id="email" aria-required="true" tabindex="0" />
          <p class="errorMessage"></p>
          </div>
          <label for="your_message" tabindex="0">Votre message</label>
          <textarea id="your_message" name="your_message" aria-required="true" tabindex="0"></textarea>
        </div>
      <button class="contact_form_button contact_button" type="submit" tabindex="0">Envoyer</button>
      </form>
      <div id="confirmation-message" class="hide">
      <p class="success-message">Votre email a été envoyé.</p>
    </div>
      </div>
      </div>
  `;

  modal.innerHTML = form;
};

const checkForm = () => {
  const form = document.getElementById("contact_Photograph");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isFormValid = checkFirstName() && checkLastName() && checkEmail();

    if (isFormValid) {
      confirmationMessage.classList.add("show");
      return valide;
    } else {
      confirmationMessage.classList.add("hide");
    }
  });
};
