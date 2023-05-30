import crossIcon from "../assets/images/cross.png";
import ubicationIcon from "../assets/images/ubication.png";
import { Fade } from "react-awesome-reveal";

const WelcomeMessage = () => {
  return (
    <header className="position-relative">
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <Fade cascade duration={75} triggerOnce>
          <div className="mt-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={crossIcon}
                className="cross-icon rounded-3 d-block"
                alt="cruz"
              />
            </div>
            <h1 className="title fw-bold">Iglesia Vida Abundante</h1>
          </div>
        </Fade>
        <Fade cascade duration={75} triggerOnce>
          <h2 className="fs-2">
            &quot;Yo (Jesús) he venido para que tengan vida, y para que la
            tengan en abundancia&quot;
          </h2>
        </Fade>
        <h2 className="fs-4">
          <Fade cascade duration={75} triggerOnce>
            Juan 10:10 (la Biblia)
          </Fade>
        </h2>
        <h3 className="church-description text-uppercase fs-2 mb-4">
          <Fade cascade duration={75} triggerOnce>
            Iglesia cristiana evangélica
          </Fade>
        </h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <img src={ubicationIcon} className="ubication-icon" alt="ubicación" />
          <Fade cascade duration={75} triggerOnce>
            <h4 className="mb-0 ubication-text fw-lighter fs-3 mt-2">
              México 659, San Miguel de Tucumán, Tucumán, Argentina
            </h4>
          </Fade>
        </div>
      </div>
    </header>
  );
};

export default WelcomeMessage;
