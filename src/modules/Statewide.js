// import logoDark from "../assets/img/Logo dark.png"
// import MaterialIcon from 'material-icons-react';
import stateFlorida from "../assets/video/stateFlorida.mp4"
import { Link } from "react-router-dom"
import FreeQuote from "../components/FreeQuote"


export default function Statewide () {

  // const featureList = [
  //   {description: 'The integrity of your panel - We look for chips, cracks and delamination', key: 0},
  //   {description: 'The framework for corrosion and loose fittings', key: 1},
  //   {description: 'All roof penetrations for potential leak development', key: 2},
  //   {description: 'Damage from birds or nesting animals', key: 3},
  //   {description: 'The integrity of all mounting brackets to ensure a tight and proper fit', key: 4},
  //   {description: 'Any possible inverter error codes', key: 5}
  // ];

    return(
      <section className="text-green-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* Video region */}
            <div className="w-64 md:w-1/2 md:h-64 mb-10 bg-black flex-shrink-0 justify-center grid mx-auto">
              <video loop className="max-w-6xl" style={{objectFit: "fill", width: "110%"}} autoPlay muted playsInline>
                <source id="myvideo" src={stateFlorida} type="video/mp4" />
              </video>
            </div>
            {/* Entire text content region */}
            <div className="flex flex-col sm:flex-row mt-12 lg:mt-24 xl:mt-40 md:ml-24 lg:ml-0">
              <div className="sm:w-5/6 lg:w-full sm:pl-8 sm:py-8 sm:border-l border-green-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-0 text-green-400 text-2xl">CLEANING THE ENTIRE STATE OF FLORIDA                 
                  {/* <span className==="pl-2">
                    <MaterialIcon icon="invert_colors" color="#FAFAFA" />
                  </span> */}
                </h2>
                <div className="w-24 h-1 bg-green-500 rounded mt-2 mb-4"></div>
              </div>
              <br />
              <div className="leading-relaxed text-lg mb-4 text-green-300">
                <p>We have satellite offices strageically located throughout the state of Florida to ensure your needs are scheduled and met in a timely manner.</p>
                <br />
                {/* <p>Experts agree that dirty solar panels do not produce as much power as clean ones. According to the National Renewable Energy Lab, the loss may be as high as 25% annually. In industrial areas, locations of high traffic, high agricultural activities, close proximity to saltwater, and high pollen regions it may be even worse.</p>
                <br />
                <h2 className="font-medium text-center text-xl text-green-400">LET US DO THE DIRTY WORK!!</h2>
                <div className="grid justify-center">
                  <div className="w-44 h-0.5 bg-green-500 rounded mt-2 mb-4"></div>
                </div>
                <br /> */}
                {/* <p>Not only do we return your solar panels to the cleanest and highest production standards, we also use equipment and solution that was exclusively designed for, and approved by all solar panel manufacturers. </p>
                <br />
                <h2 className="font-medium text-center text-xl text-green-400">SIX POINT INSPECTION</h2>
                <div className="grid justify-center">
                  <div className="w-36 h-0.5 bg-green-500 rounded mt-2 mb-4"></div>
                </div>
                <br />
                <p>Our service also includes a six-point inspection of your system. This inspection consists of checking for:</p>
                <br />
                <div>
                  <ol className="list-decimal  list-inside">
                    {featureList.map(feature => {
                      return (
                        <li key={feature.key}>{feature.description}</li>
                      );
                    })}
                  </ol>
                </div> */}
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