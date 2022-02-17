import Home from "./modules/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Nav from "./modules/Nav"
import SolarCleaning from "./modules/SolarCleaning"
import Footer from "./components/Footer"
import Statewide from "./modules/Statewide";
import Banner from "./components/Banner"
import ContactUs from "./modules/ContactUs";
import PrivacyPolicy from "./modules/PrivacyPolicy";
import Estimate from "./modules/Estimate";
import RoofShampoo from "./components/RoofShampoo"
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
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
          </Routes>
          <div>
            <Footer />
          </div>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
