import Home from "./modules/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Nav from "./modules/Nav";
import SolarCleaning from "./modules/SolarCleaning";
import Footer from "./components/Footer";
import Statewide from "./modules/Statewide";
import Banner from "./components/Banner"
import ContactUs from "./modules/ContactUs";
import PrivacyPolicy from "./modules/PrivacyPolicy";
import Estimate from "./modules/Estimate";
import RoofShampoo from "./modules/RoofShampoo"
import GutterCleaning from "./modules/GutterCleaning";
import { useLayoutEffect } from 'react';
import RoofLanding from "./modules/Learn Subdomain/RoofLanding";
import LandingNav from "./modules/Learn Subdomain/LandingNav";
import ThankYou from "./modules/ThankYou";
import PopupContact from "./components/PopupContact";
import ContractNav from "./modules/Contract Subdomain/ContractNav";
import ContractHome from "./modules/Contract Subdomain/ContractHome";

// const TRACKING_ID = "G-WHY9CP368R"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);git pull

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  if (window.location.host.split(".")[0] === "learn") {
    return (
      <Router>
        <div className="bg-black">
          <Wrapper>
            <div>
              <LandingNav />
            </div>
            <Routes>
              <Route path="/" element={<RoofLanding />} />
              <Route path="thankyou" element={ <ThankYou /> } />
            </Routes>
            {/* HIDDEN POPUP */}
            <div>
              <input type="checkbox" id="roof-popup" className="modal-toggle" />
              <label className="modal items-start lg:items-center pt-4 md:pt-8 " for="roof-popup">
                  <label className="modal-box w-11/12 md:max-w-5xl pt-4 max-h-screen" for="">                  
                      <PopupContact />
                  </label>
              </label>
            </div>
          </Wrapper>
        </div>
      </Router>
    );
  } if (window.location.host.split(".")[0] === "contract") {
    return (
      <Router>
        <div className="bg-black">
          <Wrapper>
            <div>
              <ContractNav />
            </div>
            <Routes>
              <Route path="/" element={<ContractHome />} />
              <Route path="thankyou" element={ <ThankYou /> } />
            </Routes>
          </Wrapper>
        </div>
      </Router>
    );
  } else {
      return (
        <Router>
          <div className="bg-black">
            <Wrapper>
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
                <Route path="/roofshampoo" element={<RoofShampoo />} />
                <Route path="/gutters" element={<GutterCleaning />} />
              </Routes>
              <div>
                <Footer />
              </div>
            </Wrapper>
          </div>
        </Router>
      );
    }
}

export default App;
