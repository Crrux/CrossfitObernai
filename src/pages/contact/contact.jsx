import axios from "axios";
import { useEffect, useState } from "react";

import TitleBackgroundImage from "/assets/title_background/TitleBackground_Contact.webp";
import { Link } from "react-router-dom";
import LoadingSpinner from '../../components/Loading/Spinner/Spinner';

// Todo: Form submission / validation / validation error display

function Contact() {
  // Initialize state for contact form data
  const [contact, setContact] = useState({
    name: "",
    firstname: "",
    email: "",
    tel: "",
    message: "",
    checkbox: false
  });

  // Initialize state for form submission status
  const [isFormSent, setisFormSent] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  // Initialize state for form validation errors
  const [hasErrors, setHasErrors] = useState(true);

  // Initialize state for form validation errors
  const [errors, setErrors] = useState({});

  // Handle changes in form input fields
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

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
          // console.log(res.data);
          // console.log(res)
          if (res.status === 200) {
            console.log("status 200 retourner")
          } else if (res.status !== 200) {
            console.log("status pas 200 retourner")
          }
          setisFormSent(true);
        })
        .catch((error) => {
          console.error("An error occurred while submitting the form:", error);
        })
        .finally(() => {
          // Reset the loading state
          setIsFormLoading(false);
          console.log(isFormSent);
        });
    }
  }

  // Validate form fields on every change
  useEffect(() => {
    const validateField = () => {
      let fieldValidationErrors = errors;

      // Validate name field
      let nameValid = /^[\p{L}\s'-]{2,}$/u.test(contact.name);
      fieldValidationErrors.nameError = nameValid
        ? false
        : true;

      // Validate firstname field
      let firstnameValid = /^[\p{L}\s'-]{2,}$/u.test(contact.firstname);
      fieldValidationErrors.firstnameError = firstnameValid
        ? false
        : true;

      // Validate email field
      let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(
        contact.email
      );
      fieldValidationErrors.emailError = emailValid
        ? false
        : true;

      // Validate telephone field
      let telValid = /^(\+33\s?|0)[1-9](\d{2}\s?){4}$/.test(contact.tel);
      fieldValidationErrors.telError = telValid
        ? false
        : true;

      // Validate message field
      let messageValid = contact.message.length > 2;
      fieldValidationErrors.messageError = messageValid
        ? false
        : true;

      let checkboxValid = contact.checkbox
      fieldValidationErrors.checkboxError = !checkboxValid
      console.log("hasErrors : ", hasErrors)
      if (hasErrors) {
        console.log('fieldValidationErrors : ', fieldValidationErrors)
      }
      setErrors(fieldValidationErrors);
    };
    validateField();

    // Check if there are any validation errors and update the state accordingly
    setHasErrors(Object.values(errors).some((error) => error !== false));
  }, [contact, errors, hasErrors]);

  return (
    <>
      <main id="main_contact">
        <div className="main__header">
          <div className="title_container">
            <img src={TitleBackgroundImage} alt="Background" />
            <p>Pour plus d&apos;informations</p>
            <h1>Contact</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate id="form_contact">
          <div className="form_contact_container">
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
              {errors.nameError && <span>erreur</span>}
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
              {errors.firstnameError && <span>erreur</span>}
            </label>
          </div>
          <div className="form_contact_container">
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
              {errors.emailError && <span>erreur</span>}
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
              {errors.telError && <span>erreur</span>}
            </label>
          </div>

          <label htmlFor="message">
            <p>Message</p>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message..."
              rows={10}
              onChange={handleChange}
            />
            {errors.messageError && <span>erreur</span>}
          </label>
          <label htmlFor="checkbox" id="form_contact_checkbox_container">
            <input type="checkbox" id="checkbox" name="checkbox" value='consent' onChange={handleChange}></input>
            <p>accepter <Link to='/mentions-legales'>mention legale</Link> </p>
          </label>

          <input type="submit" value="Submit" disabled={hasErrors} />
          {isFormLoading ? <LoadingSpinner /> : ""}
        </form>
      </main>
    </>
  );
}

export default Contact;
