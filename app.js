// eslint-disable-next-line func-names
(function () {
  const emailInput = document.getElementById("email");
  const zipInput = document.getElementById("zip");
  const passInput = document.getElementById("pass");
  const passConfInput = document.getElementById("passConf");
  const submit = document.getElementById("submitBtn");
  const success = document.getElementById("successDiv");
  let validForm = false;

  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid === false || emailInput.value === "") {
      emailInput.classList.add("invalid");
      validForm = false;
    } else {
      validForm = true;
      emailInput.classList.remove("invalid");
    }
  });

  zipInput.addEventListener("input", () => {
    const num = Number(zipInput.value);
    if (num === 0 || zipInput.value === "") {
      zipInput.classList.add("invalid");
      validForm = false;
    } else {
      zipInput.classList.remove("invalid");
      validForm = true;
    }
  });

  passInput.addEventListener("input", () => {
    if (passInput.value === "") {
      passInput.classList.add("invalid");
      validForm = false;
    } else {
      passInput.classList.remove("invalid");
      validForm = true;
    }

    passConfInput.addEventListener("input", () => {
      if (
        passInput.value !== passConfInput.value ||
        passConfInput.value === ""
      ) {
        passConfInput.classList.add("invalid");
        validForm = false;
      } else {
        passConfInput.classList.remove("invalid");
        validForm = true;
      }
    });

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (validForm === true) {
        success.style.display = "flex";
        emailInput.value = "";
        zipInput.value = "";
        passInput.value = "";
        passConfInput.value = "";
      }
    });
  });
})();
