import axios from "axios";
import { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    firstname: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(contact.tel);
    // console.log(value);
    console.log(contact);
    validateField(name);
  };

  const validateField = (fieldName) => {
    let fieldValidationErrors = errors;
    let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(
      contact.email
    );
    let telValid =
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(
        contact.tel
      );

    switch (fieldName) {
      case "email":
        fieldValidationErrors.emailError = emailValid ? "" : " is invalid";
        break;
      case "tel":
        fieldValidationErrors.telError = telValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    setErrors(fieldValidationErrors);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!errors.emailError && !errors.telError) {
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact`, contact)
        .then((res) => {
          console.log(res.data);
        });
    } else {
      console.log(errors);
    }
  }

  useEffect(() => {
    console.log(contact);
    // console.log(errors);
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
