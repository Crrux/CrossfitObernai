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
                <strong>📍</strong>
                <a
                  href="https://maps.app.goo.gl/8VZHC6K4swqYMEe4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  4 rue du Thal, 67210 Obernai
                </a>
              </p>
              <p>
                <strong>📞</strong> 06.14.03.06.94
              </p>
              <p>
                {" "}
                <strong>📩</strong> crossfitobernai@gmail.com
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
        <div id="Google_map">
          <iframe
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY
            }&q=Crossfit+Obernai,Obernai+France`}
            allowFullScreen
          ></iframe>
        </div>
        <div id="Hours_info">
          <h2>Horaires</h2>
          <table>
            <tbody>
              <tr>
                <th scope="row">Lundi:</th>
                <td>10h00 - 20h30</td>
              </tr>
              <tr>
                <th scope="row">Mardi:</th>
                <td>12h30 - 20h30</td>
              </tr>
              <tr>
                <th scope="row">Mercredi:</th>
                <td>07:00 - 20:30</td>
              </tr>
              <tr>
                <th scope="row">Jeudi:</th>
                <td>12:30 - 20h30</td>
              </tr>
              <tr>
                <th scope="row">Vendredi:</th>
                <td>10h00 - 20h30</td>
              </tr>
              <tr>
                <th scope="row">Samedi:</th>
                <td>09:00 - 12:00</td>
              </tr>
              <tr>
                <th scope="row">Dimanche:</th>
                <td>
                  <span style={{ color: "red" }}>Fermé</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
