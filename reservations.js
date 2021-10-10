// Validation of Reservation form JavaScript

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".requires-validation");
  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert(
            "Thank you! Your reservation has been confirmed. We look forward to seeing you soon."
          );
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
