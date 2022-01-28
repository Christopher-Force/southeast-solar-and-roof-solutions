import Home from "./modules/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./modules/Nav"
import SolarCleaning from "./modules/SolarCleaning"
import Footer from "./components/Footer"
import Statewide from "./modules/Statewide";
import Banner from "./components/Banner"


function App() {
  return (
    <Router>
      <div className="bg-black">
        <div>
          <Nav />
          <Banner />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cleaning" element={<SolarCleaning />} />
          <Route path="/statewide" element={<Statewide />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
