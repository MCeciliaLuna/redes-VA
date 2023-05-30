import socialMedia from "../assets/images/socialmedia.png";
import { Fade } from "react-awesome-reveal";

const Links = () => {
  return (
    <section className="links position-relative">
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
        <ul className="list-group w-75">
          <div className="d-flex justify-content-center">
            <img
              src={socialMedia}
              className="socialmedia-icon pb-2"
              alt="redes-sociales"
            />
          </div>
            <h6 className="fs-3 mb-3">Nuestras redes:</h6>
          <a
            href="https://www.facebook.com/VidaAbundanteTuc"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-facebook"
          >
            <Fade cascade duration={75} triggerOnce>
              Facebook
            </Fade>
          </a>
          <a
            href="https://www.instagram.com/asocvidaabundante/"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-instagram"
          >
            <Fade cascade duration={75} triggerOnce>
              Instagram
            </Fade>
          </a>
          <a
            href="https://www.youtube.com/@IglesiaVidaAbundanteTucuman"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-youtube"
          >
            <Fade cascade duration={75} triggerOnce>
              Youtube
            </Fade>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493814046029"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-whatsapp"
          >
            <Fade cascade duration={75} triggerOnce>
              Whatsapp
            </Fade>
          </a>
          <a
            href="https://www.facebook.com/RadioLaVozAmigaTucuman"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-facebookradio"
          >
            <Fade cascade duration={75} triggerOnce>
              Facebook Radio
            </Fade>
          </a>
          <a
            href="http://chino.republicahosting.com:8364/live"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-radio"
          >
            <Fade cascade duration={75} triggerOnce>
              FM 92.1
            </Fade>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.la_voz_amigatuc"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-playstore"
          >
            <Fade cascade duration={75} triggerOnce>
              App Radio
            </Fade>
          </a>
          <a
            href="https://goo.gl/maps/ynToVqJjnUYwLz9N7"
            target="_blank"
            rel="noreferrer"
            className="fs-1 fw-bold link-maps"
          >
            <Fade cascade duration={75} triggerOnce>
              Google Maps
            </Fade>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Links;
