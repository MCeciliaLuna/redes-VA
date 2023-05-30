import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Information from "./components/Information";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="text-center container">
      <Fade triggerOnce>
        <WelcomeMessage />
      </Fade>
      <main>
        <Fade triggerOnce>
          <Information />
        </Fade>
        <Fade triggerOnce>
          <Links />
        </Fade>
      </main>
      <Fade triggerOnce>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
