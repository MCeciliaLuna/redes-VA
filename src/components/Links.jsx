import socialMedia from '../assets/images/socialmedia.png'

const Links = () => {
  return (
    <section className="links position-relative">
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
      <ul className="list-group w-50">
      <div className="d-flex justify-content-center">
      <img src={socialMedia} className="socialmedia-icon pb-2" alt="" />
      </div>
        <a
          href="https://www.facebook.com/VidaAbundanteTuc"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-facebook"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/asocvidaabundante/"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-instagram"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@IglesiaVidaAbundanteTucuman"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-youtube"
        >
          Youtube
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5493814046029"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-whatsapp"
        >
          Whatsapp
        </a>
        <a
          href="https://www.facebook.com/RadioLaVozAmigaTucuman"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-facebookradio"
        >
          Facebook Radio
        </a>
        <a
          href="http://chino.republicahosting.com:8364/live"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-radio"
        >
          FM 92.1
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.app.la_voz_amigatuc"
          target="_blank"
          rel="noreferrer"
          className="fs-1 fw-bold link-playstore"
        >
          App Radio
        </a>
      </ul>
      </div>
    </section>
  );
};

export default Links;
