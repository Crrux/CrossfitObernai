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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(contact);
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact`, contact)
      .then((res) => {
        console.log(res.data);
      });
  }

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <>
      <p>contact form</p>
      <form
        onSubmit={handleSubmit}
        // action={`${import.meta.env.VITE_REACT_APP_API_URL}/contact`}
        // method="POST"
        // encType="multipart/form-data"
        // target="_blank"
      >
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
