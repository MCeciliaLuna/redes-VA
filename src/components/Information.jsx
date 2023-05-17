import ubicationIcon from "../assets/images/ubication.png";
import communityIcon from "../assets/images/community.png";

const Information = () => {
  return (
    <section className="information">
      <hr />
      <h3 className="church-description text-uppercase">
        Iglesia cristiana evangélica
      </h3>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <img src={ubicationIcon} className="ubication-icon" alt="" />
        <h4 className="mb-0 ubication-text">
          México 659, San Miguel de Tucumán, Tucumán, Argentina
        </h4>
      </div>
      <hr />
      <img src={communityIcon} className="meetings-icon" alt="" />
      <h6 className="fs-3">Reuniones:</h6>
      <div
        className="btn-group d-flex justify-content-center flex-wrap"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <p className="meeting-general fs-2 rounded-0 px-3">
          DOM, 9:30 y 20 hs.
        </p>
        <p className="meeting-pray fs-2 rounded-0 px-3">Oración: MAR, 20 hs.</p>
        <p className="meeting-special fs-2 rounded-0 px-3">
          Santa Cena: 2° DOM de cada mes
        </p>
      </div>
    </section>
  );
};

export default Information;
