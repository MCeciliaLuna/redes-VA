import ubicationIcon from '../assets/images/ubication.png';
import communityIcon from '../assets/images/community.png';

const Information = () => {
  return (
    <section className="information">
      <h4 className="text-uppercase">Iglesia cristiana evangélica</h4>
      <img src={ubicationIcon} className="" alt="" />
      <h4>México 659, San Miguel de Tucumán</h4>
      <h5>Tucumán, Argentina</h5>
      <img src={communityIcon} className="" alt=""/>
        <h6>Reuniones:</h6>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <p className="meeting-general rounded-0 px-3">DOM, 9:30 y 20 hs.</p>
  <p className="meeting-pray rounded-0 px-3">Oración: MAR, 20 hs.</p>
  <p className="meeting-special rounded-0 px-3">Santa Cena: 2° DOM de cada mes</p>
</div>
    </section>
  );
};

export default Information;
