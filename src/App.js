import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card" id="app--card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
