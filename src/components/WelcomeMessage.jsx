import crossIcon from '../assets/images/cross.png'

const WelcomeMessage = () => {
  return (
    <header>
      <div className="mt-5">
      <img src={crossIcon} className="rounded-3 d-block" alt="" />
      <h1 className="title fw-bold">Iglesia Vida Abundante</h1>
      </div>
      <h2>&quot;Yo (Jesús) he venido para que tengan vida, y para que la tengan en abundancia&quot;</h2>
      <h2>Juan 10:10 (la Biblia)</h2>
    </header>
  );
};

export default WelcomeMessage;