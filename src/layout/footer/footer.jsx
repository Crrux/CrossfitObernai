import { Link } from "react-router-dom";
import LogoFacebook from "/assets/logos_svg/logo_facebook.svg";
import LogoInstagram from "/assets/logos_svg/logo_instagram.svg";

function Footer() {
  // const test = true;
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width <= 767.97) {
    isTabletorAbove = true;
  }
  return (
    <footer>
      <section id="Contact_info">
        <div>
          {isTabletorAbove ? (
            <>
              <p>
                Adresse:
                <a
                  href="https://maps.app.goo.gl/8VZHC6K4swqYMEe4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  4 rue du Thal, 67210 Obernai
                </a>
              </p>
              <p>
                Téléphone: <a href="tel:+33614030694">06.14.03.06.94</a>
              </p>
              <p>
                Email:
                <a href="mailto:crossfitobernai@gmail.com">
                  crossfitobernai@gmail.com
                </a>
              </p>
              <div id="Contact_info_Reseaux">
                <a
                  href="https://www.facebook.com/cfobernai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LogoFacebook} alt="Lien Facebook"></img>
                </a>
                <a
                  href="https://www.instagram.com/crossfitobernai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LogoInstagram} alt="Lien Instagram" />
                </a>
              </div>
            </>
          ) : (
            <>
              <p>
                Adresse:
                <a
                  href="https://maps.app.goo.gl/8VZHC6K4swqYMEe4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  4 rue du Thal, 67210 Obernai
                </a>
              </p>
              <p>Téléphone: 06.14.03.06.94</p>
              <p>Email: crossfitobernai@gmail.com</p>
              {/* //TODO: horaires de la box  */}
              <p>Horaire?</p>
              <div id="Contact_info_Reseaux">
                <a
                  href="https://www.facebook.com/cfobernai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LogoFacebook} alt="Lien Facebook"></img>
                </a>
                <a
                  href="https://www.instagram.com/crossfitobernai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LogoInstagram} alt="Lien Instagram" />
                </a>
              </div>
            </>
          )}
        </div>
        {/* {test ? (
          " "
        ) : (
          <iframe
            width="450"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY
            }&q=Crossfit+Obernai,Obernai+France`}
            allowFullScreen
          ></iframe>
        )} */}
        <iframe
          width="450"
          height="250"
          frameBorder="0"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${
            import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY
          }&q=Crossfit+Obernai,Obernai+France`}
          allowFullScreen
        ></iframe>
      </section>
      <div>
        <p>
          <Link to="/mentions-legales">Mentions legales</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
