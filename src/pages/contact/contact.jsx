import axios from "axios";
import { useEffect, useState, useRef } from "react";

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
  const formRef = useRef(null);

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

  // Validate form fields on every change
  useEffect(() => {
    const validateField = () => {
      let fieldValidationErrors = {};

      // Validate name field
      let nameValid = /^[\p{L}\s'-]{2,}$/u.test(contact.name);
      fieldValidationErrors.nameError = nameValid ? false : true;

      // Validate firstname field
      let firstnameValid = /^[\p{L}\s'-]{2,}$/u.test(contact.firstname);
      fieldValidationErrors.firstnameError = firstnameValid ? false : true;

      // Validate email field
      let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(contact.email);
      fieldValidationErrors.emailError = emailValid ? false : true;

      // Validate telephone field
      let telValid = /^(\+33\s?|0)[1-9](\d{2}\s?){4}$/.test(contact.tel);
      fieldValidationErrors.telError = telValid ? false : true;

      // Validate message field
      let messageValid = contact.message.length > 2;
      fieldValidationErrors.messageError = messageValid ? false : true;

      // Validate checkbox field
      let checkboxValid = contact.checkbox
      fieldValidationErrors.checkboxError = !checkboxValid

      setErrors(fieldValidationErrors);
      setHasErrors(Object.values(fieldValidationErrors).some((error) => error !== false));
    };

    validateField();
  }, [contact]);

  // TODO: Handle form submission

  function handleSubmit(e) {
    e.preventDefault();
    // If there are no validation errors, submit the form data
    if (!hasErrors) {
      console.log('first')
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
            setContact({
              checkbox: false,
              name: '',
              firstname: '',
              email: '',
              tel: '',
              message: ''
            });
            setisFormSent(true);
          } else if (res.status !== 200) {
            console.log("status pas 200 retourner")
          }
        })
        .catch((error) => {
          console.error("An error occurred while submitting the form:", error);
          setisFormSent(false);
        })
        .finally(() => {
          // Reset the loading state
          setIsFormLoading(false);
          console.log(isFormSent);
        });
    } else {
      console.log('else')
    }
  }

  return (
    <>
      <main className="main_contact">
        <div className="main__header">
          <div className="title_container">
            <img src={TitleBackgroundImage} alt="Background" />
            <p>Pour plus d&apos;informations</p>
            <h1>Contact</h1>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="form_contact">
          <div className="form_contact_container">
            <label htmlFor="name">
              <p>Nom</p>
              <div>
                <input
                  type="text"
                  id="name"
                  className={errors.nameError ? 'FormError' : ''}
                  name="name"
                  value={contact.name}
                  autoComplete="given-name"
                  autoFocus
                  required
                  onChange={handleChange}
                />
                {errors.nameError ? <i className="fa-solid fa-circle-exclamation" /> : ""}
              </div>
            </label>
            <label htmlFor="firstname">
              <p>Prenom</p>
              <div>
                <input
                  type="text"
                  id="firstname"
                  className={errors.firstnameError ? 'FormError' : ''}
                  name="firstname"
                  value={contact.firstname}
                  autoComplete="family-name"
                  required
                  onChange={handleChange}
                />
                {errors.firstnameError ? <i className="fa-solid fa-circle-exclamation" /> : ""}
              </div>
            </label>
          </div>
          <div className="form_contact_container">
            <label htmlFor="email">
              <p>Email</p>
              <div>
                <input
                  type="email"
                  id="email"
                  className={errors.emailError ? 'FormError' : ''}
                  name="email"
                  value={contact.email}
                  autoComplete="email"
                  required
                  onChange={handleChange}
                />
                {errors.emailError ? <i className="fa-solid fa-circle-exclamation" /> : ""}
              </div>
            </label>
            <label htmlFor="tel">
              <p>Telephone</p>
              <div>
                <input
                  type="tel"
                  id="tel"
                  className={errors.telError ? 'FormError' : ''}
                  name="tel"
                  value={contact.tel}
                  autoComplete="tel"
                  required
                  onChange={handleChange}
                />
                {errors.telError ? <i className="fa-solid fa-circle-exclamation" /> : ""}
              </div>
            </label>
          </div>

          <label htmlFor="message">
            <p>Message</p>
            <div>
              <textarea
                id="message"
                className={errors.messageError ? 'FormError' : ''}
                name="message"
                placeholder="Votre message..."
                rows={10}
                value={contact.message}
                onChange={handleChange}
              />
              {errors.messageError ? <i className="fa-solid fa-circle-exclamation" /> : ""}
            </div>
          </label>
          <label htmlFor="checkbox" className="form_contact_checkbox_container">
            <input type="checkbox" id="checkbox" name="checkbox" value={contact.checkbox} checked={contact.checkbox} onChange={handleChange}></input>
            <p className="checkbox_text">accepter <Link to='/mentions-legales'>mention legale</Link> </p>
          </label>


          {isFormLoading ? <LoadingSpinner /> : <input type="submit" value="Submit" />}
        </form>
      </main>
    </>
  );
}

export default Contact;
