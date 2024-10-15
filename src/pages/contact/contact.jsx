function Contact() {
  return (
    <>
      <p>contact form</p>
      <form
        action={`${import.meta.env.VITE_REACT_APP_API_URL}/test`}
        method="POST"
      >
        <label htmlFor="name">
          <p>Nom</p>
          <input type="text" id="name" name="name" required />
        </label>
        <label htmlFor="forname">
          <p>Prenom</p>
          <input type="text" id="forname" name="forname" required />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" id="email" name="email" required />
        </label>
        <label htmlFor="tel">
          <p>Telephone</p>
          <input type="tel" id="tel" name="tel" required />
        </label>
        <label htmlFor="message">
          <p>Message</p>
          <textarea id="message" name="message" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Contact;
