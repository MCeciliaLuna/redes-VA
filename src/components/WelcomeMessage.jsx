import crossIcon from "../assets/images/cross.png";
import ubicationIcon from "../assets/images/ubication.png";

const WelcomeMessage = () => {
  return (
    <header className="position-relative">
      <div className="position-absolute top-50 start-50 translate-middle w-100">
      <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={crossIcon}
            className="cross-icon rounded-3 d-block"
            alt=""
          />
        </div>
        <h1 className="title fw-bold">Iglesia Vida Abundante</h1>
      </div>
      <h2 className="fs-3">
        &quot;Yo (Jesús) he venido para que tengan vida, y para que la tengan en
        abundancia&quot;
      </h2>
      <h2 className="fs-4">Juan 10:10 (la Biblia)</h2>
      <h3 className="church-description text-uppercase">
        Iglesia cristiana evangélica
      </h3>
      <div className="d-flex justify-content-center align-items-center">
        <img src={ubicationIcon} className="ubication-icon" alt="" />
        <h4 className="mb-0 ubication-text fw-lighter">
          México 659, San Miguel de Tucumán, Tucumán, Argentina
        </h4>
      </div>
      </div>
    </header>
  );
};

export default WelcomeMessage;
