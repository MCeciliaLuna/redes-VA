import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Information from "./components/Information";
import ScriptPhotos from "./components/ScriptPhotos";
// import { Fade } from "react-awesome-reveal";

function App() {
  return (
    // <Fade cascade>
    <div className="text-center container">
      <WelcomeMessage />
      <main>
        <Information />
        <ScriptPhotos />
        <Links />
      </main>
      <Footer />
    </div>
    // </Fade>
  );
}

export default App;
