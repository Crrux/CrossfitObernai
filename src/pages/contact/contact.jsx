import axios from "axios";
import { useEffect, useState } from "react";

function Contact() {
  // Initialize state for contact form data
  const [contact, setContact] = useState({
    name: "",
    firstname: "",
    email: "",
    tel: "",
    message: "",
  });

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

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // If there are no validation errors, submit the form data
    if (!errors.emailError && !errors.telError) {
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact`, contact)
        .then((res) => {
          console.log(res.data);
        });
    } else {
      // If there are validation errors, log them to the console
      console.log(errors);
    }
  }

  // Validate form fields on every change
  useEffect(() => {
    const validateField = () => {
      let fieldValidationErrors = errors;
      // Validate email field
      let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(
        contact.email
      );
      // Validate telephone field
      let telValid = /^(\+33\s?|0)[1-9](\d{2}\s?){4}$/.test(contact.tel);

      fieldValidationErrors.emailError = emailValid ? "" : " is invalid";
      fieldValidationErrors.telError = telValid ? "" : " is invalid";
      setErrors(fieldValidationErrors);
    };
    validateField();
    console.log(errors);
  }, [contact, errors]);

  return (
    <>
      <p>contact form</p>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">
          <p>Nom</p>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="firstname">
          <p>Prenom</p>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={contact.firstname}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="tel">
          <p>Telephone</p>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={contact.tel}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          <p>Message</p>
          <textarea
            id="message"
            name="message"
            minLength="3"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Contact;
