import crossIcon from "../assets/images/cross.png";
import ubicationIcon from "../assets/images/ubication.png";
import { Fade } from "react-awesome-reveal";

const WelcomeMessage = () => {
  return (
    <header className="position-relative">
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <div className="mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={crossIcon}
              className="cross-icon rounded-3 d-block"
              alt="cruz"
            />
          </div>
          <h1 className="title fw-bold">
            <Fade cascade duration={75} triggerOnce>
              Iglesia Vida Abundante
            </Fade>
          </h1>
        </div>
        <h2 className="fs-2">
          <Fade cascade duration={75} delay={500} triggerOnce>
            &quot;Yo (Jesús) he venido para que tengan vida, y para que la
            tengan en abundancia&quot;
          </Fade>
        </h2>
        <h2 className="fs-4">
          <Fade cascade duration={75} delay={2000} triggerOnce>
            Juan 10:10 (la Biblia)
          </Fade>
        </h2>
        <h3 className="church-description text-uppercase fs-2 mb-4">
          <Fade cascade duration={75} delay={2500} triggerOnce>
            Iglesia cristiana evangélica
          </Fade>
        </h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <img src={ubicationIcon} className="ubication-icon" alt="ubicación" />
          <h4 className="mb-0 ubication-text fw-lighter fs-3 mt-2">
            <Fade cascade duration={75} delay={2500} triggerOnce>
              México 659, San Miguel de Tucumán, Tucumán, Argentina
            </Fade>
          </h4>
        </div>
      </div>
    </header>
  );
};

export default WelcomeMessage;
