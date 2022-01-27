import Home from "./modules/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nav from "./modules/Nav"
import SolarCleaning from "./modules/SolarCleaning"
import Footer from "./components/Footer"
import Statewide from "./modules/Statewide";


function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<SolarCleaning />} />
        <Route path="/statewide" element={<Statewide />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
