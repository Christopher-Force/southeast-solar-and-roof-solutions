// import logoDark from "../assets/img/Logo dark.png"
// import MaterialIcon from 'material-icons-react';
import stateFlorida from "../assets/video/Stateflorida.mp4"
import { Link } from "react-router-dom"
import FreeQuote from "../components/FreeQuote"


export default function Statewide () {
  
    return(
      <section className="text-green-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* Video region */}
            <div className="w-64 md:w-1/2 md:h-64 xl:h-96 mb-10 bg-black flex-shrink-0 justify-center grid mx-auto">
              <video loop className="max-w-6xl" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline>
                <source id="myvideo" src={stateFlorida} type="video/mp4" />
              </video>
            </div>
            {/* Entire text content region */}
            <div className="flex flex-col sm:flex-row mt-12 md:mt-24 lg:mt-24 xl:mt-24 md:ml-24 lg:ml-0">
              <div className="sm:w-5/6 lg:w-full sm:pl-8 sm:py-8 sm:border-l border-green-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-0 text-green-400 text-2xl">CLEANING THE ENTIRE STATE OF FLORIDA                 
                </h2>
                <div className="w-24 h-1 bg-green-500 rounded mt-2 mb-4"></div>
              </div>
              <br />
              <div className="leading-relaxed text-lg mb-4 text-green-300">
                <p>We have satellite offices strategically located throughout the state of Florida to ensure your needs are scheduled and met in a timely manner. From Tampa, Sarasota, Orlando, Jacksonville, Fort Lauderdale, Miami, Tallahassee, Daytona Beach or anywhere else in Florida, Southeast Solar and Roof Solutions can help clean your dirty roofs and solar panels. We are Florida's premier solar and roof cleaning company dedicated to providing the very best service in the state.</p>
                <br />
                </div>
                <Link to="/">
                  <div className="text-green-500 inline-flex items-center">Go Home
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FreeQuote />
      </section>
    )
}