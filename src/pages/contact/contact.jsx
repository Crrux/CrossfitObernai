import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  // Initialize state for contact form data
  const [contact, setContact] = useState({
    name: "",
    firstname: "",
    email: "",
    tel: "",
    message: "",
  });

  // Initialize state for form submission status
  const [isFormSent, setisFormSent] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  console.log(isFormLoading);

  // const [captchaValue, setCaptchaValue] = useState(null);
  // console.log(captchaValue);

  // Initialize state for form validation errors
  const [hasErrors, setHasErrors] = useState(true);

  // Initialize state for form validation errors
  const [errors, setErrors] = useState({});

  // Handle changes in form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // TODO: Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // If there are no validation errors, submit the form data
    if (!hasErrors) {
      // Set the loading state
      setIsFormLoading(true);

      // Send the POST request
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact`, contact)
        .then((res) => {
          console.log(res.data);
          setisFormSent(true);
        })
        .catch((error) => {
          console.error("An error occurred while submitting the form:", error);
        })
        .finally(() => {
          // Reset the loading state
          setIsFormLoading(false);
        });
    }
  }

  // Validate form fields on every change
  useEffect(() => {
    const validateField = () => {
      let fieldValidationErrors = errors;

      // Validate name field
      let nameValid = /^[A-Za-z\s'-]{2,}$/.test(contact.name);
      fieldValidationErrors.nameError = nameValid
        ? ""
        : " must contain only letters and 2 caractere minimum";

      // Validate firstname field
      let firstnameValid = /^[A-Za-z\s'-]{2,}$/.test(contact.firstname);
      fieldValidationErrors.firstnameError = firstnameValid
        ? ""
        : " must contain only letters and 2 caractere minimum";

      // Validate email field
      let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(
        contact.email
      );
      fieldValidationErrors.emailError = emailValid ? "" : " is invalid";

      // Validate telephone field
      let telValid = /^(\+33\s?|0)[1-9](\d{2}\s?){4}$/.test(contact.tel);
      fieldValidationErrors.telError = telValid ? "" : " is invalid";

      // Validate message field
      let messageValid = contact.message.length > 2;
      fieldValidationErrors.messageError = messageValid
        ? ""
        : " must be at least 3 characters long";

      setErrors(fieldValidationErrors);
    };
    validateField();

    // Check if there are any validation errors and update the state accordingly
    setHasErrors(Object.values(errors).some((error) => error !== ""));
    console.log(hasErrors);
    console.log(errors);
  }, [contact, errors, hasErrors]);

  return (
    <>
      <main id="main_contact">
        <h1>Formulaire de contact</h1>
        <form onSubmit={handleSubmit} noValidate id="form_contact">
          <div id="form_contact_divname">
            <label htmlFor="name">
              <p>Nom</p>
              <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                autoComplete="given-name"
                autoFocus
                required
                onChange={handleChange}
              />
              {errors.nameError && <span>{errors.nameError}</span>}
            </label>
            <label htmlFor="firstname">
              <p>Prenom</p>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={contact.firstname}
                autoComplete="family-name"
                required
                onChange={handleChange}
              />
              {errors.firstnameError && <span>{errors.firstnameError}</span>}
            </label>
          </div>

          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              autoComplete="email"
              required
              onChange={handleChange}
            />
            {errors.emailError && <span>{errors.emailError}</span>}
          </label>
          <label htmlFor="tel">
            <p>Telephone</p>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={contact.tel}
              autoComplete="tel"
              required
              onChange={handleChange}
            />
            {errors.telError && <span>{errors.telError}</span>}
          </label>
          <label htmlFor="message">
            <p>Message</p>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message..."
              rows={10}
              onChange={handleChange}
            />
            {errors.messageError && <span>{errors.messageError}</span>}
          </label>
          {/* <ReCAPTCHA
            sitekey={import.meta.env.VITE_REACT_APP_GOOGLE_RECAPTCHA_KEY}
            onChange={(val) => setCaptchaValue(val)}
          /> */}
          <input type="submit" value="Submit" disabled={hasErrors} />
        </form>
      </main>
    </>
  );
}

export default Contact;
