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
import ContactUs from "./modules/ContactUs";
import PrivacyPolicy from "./modules/PrivacyPolicy";
import Estimate from "./modules/Estimate";


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
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/estimate" element={<Estimate  />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
