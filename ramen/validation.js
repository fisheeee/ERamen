function submit() {
  contactForm = document.getElementById("contactUs");
  fullname = document.getElementById("fullname");
  email = document.getElementById("email");
  phone = document.getElementById("phone");
  ramen = document.getElementById("ramen");
  dryRamen = document.getElementById("dry-ramen");
  agree = document.getElementById("agree");
  if (fullname.value.trim() === "") {
    alert("Please enter your fullname");
    return;
  } else if (email.value.trim() === "") {
    alert("Please enter your E-mail");
    return;
  } else if (phone.value.trim() === "") {
    alert("Please enter your phone number");
    return;
  } else if (!ramen.checked && !dryRamen.checked) {
    alert("Please select your preference");
    return;
  } else if (!agree.checked) {
    alert("Please agree to subscribe to the newsletter");
    return;
  }

  // Validating phone number
  phoneValue = phone.value.trim();
  numericPhone = Number(phoneValue);
  if (isNaN(numericPhone) || phoneValue.length < 10 || phoneValue.length > 11) {
    alert("Please enter a valid phone number (10-11 digits only)");
    return;
  }

  error.innerHTML = "";
  alert("Success!");
  contactForm.submit();
}
