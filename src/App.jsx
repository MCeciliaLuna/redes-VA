import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Information from "./components/Information";

function App() {
  return (
    <div className="text-center container">
      <WelcomeMessage />
      <main>
        <Information />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
