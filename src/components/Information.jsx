import communityIcon from "../assets/images/community.png";
import { Fade } from "react-awesome-reveal";

const Information = () => {
  return (
    <section className="information position-relative">
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <img src={communityIcon} className="meetings-icon" alt="personas" />
        <h6 className="fs-3">Reuniones:</h6>
        <div
          className="btn-group d-flex justify-content-center flex-wrap"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <p className="meeting-general fs-1 rounded-0 px-3">
            <Fade cascade duration={50} delay={500} triggerOnce>
              DOM 9:30 y 19:30 hs.
            </Fade>
          </p>
          <p className="meeting-pray fs-1 rounded-0 px-3">
            <Fade cascade duration={50} delay={1000} triggerOnce>
              Oración: MAR, 20 hs.
            </Fade>
          </p>
          <p className="meeting-special fs-1 rounded-0 px-3">
            <Fade cascade duration={50} delay={1500} triggerOnce>
              Santa Cena: 2° DOM de cada mes
            </Fade>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
