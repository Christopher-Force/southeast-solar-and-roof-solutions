
import AnnualSolar from "../components/AnnualSolar";
import ContactBlocks from "../components/ContactBlocks";
import CTA1 from "../components/CTA1"
import FreeQuote from "../components/FreeQuote"
import cleaningVideo from "../assets/video/cleaningVideo.mp4"


export default function SolarCleaning () {

  const featureList = [
    {description: 'The integrity of your panel - We look for chips, cracks and delamination', key: 0},
    {description: 'The framework for corrosion and loose fittings', key: 1},
    {description: 'All roof penetrations for potential leak development', key: 2},
    {description: 'Damage from birds or nesting animals', key: 3},
    {description: 'The integrity of all mounting brackets to ensure a tight and proper fit', key: 4},
    {description: 'Any possible inverter error codes', key: 5}
  ];

    return(
      <section className="text-green-200 body-font bg-black">
        <div className="px-1 pt-12 flex flex-col">
          <div className="flex justify-center">
            <CTA1 />
          </div>
          <div className="mx-auto flex justify-center w-full">
            {/* Entire text content region */}
            <div className="flex flex-col sm:flex-row mt-10 justify-center">
              <div className="w-full sm:pl-2 sm:py-8 border-l border-green-200 border-t-0 mt-4 pt-4 text-left md:ml-8 pl-2">
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-0 text-primary-focus text-2xl">Solar Panel Cleaning                 
                    </h2>
                    <div className="w-24 h-1 bg-primary-focus rounded mt-2 mb-4">
                    </div>
                  </div>
                  <br />
                  <div className="leading-relaxed text-lg mb-4 text-green-200">
                    <div className="">
                      <div className="flex justify-center">
                        <div className="sm:ml-2 lg:w-4/5">
                          <p className="text-center text-2xl">Like an oil change for your car, solar panels also need maintenance to keep performing at their highest potential. Dirty solar panels cost you money by compromising their ability to produce power.
                          </p>
                          <br />
                          <div className="rounded-md border-2 flex justify-center sm:p-2">
                            <video className="max-w-3xl" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline loop>
                                <source id="myvideo" src={cleaningVideo} type="video/mp4" />
                            </video>
                          </div>
                          <br />
                          <p className="text-left text-xl">Experts agree that dirty solar panels do not produce as much power as clean ones. According to the National Renewable Energy Lab, the loss may be as high as 25% annually. In industrial areas, locations of high traffic, high agricultural activities, close proximity to saltwater, and high pollen regions it may be even worse.
                          </p>
                          <br />
                        </div>
                      </div>
                      {/* MEDIA 2 */}
                      
                      <br />
                    </div>
                    <div className="lg:w-4/5 grid grid-cols-1 justify-center mx-auto">
                      {/* Dirty Work */}
                      <div className="flex justify-center lg:py-6 lg:text-left text-center">
                        <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id='card1'>
                            <div className="flex-grow">
                              <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                              {/* span is inline icon */}
                              <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-0 mr-2">
                                  <span class="material-icons ml-0.5 mt-2" style={{fontSize: '36px'}}>
                                  recycling
                                  </span>
                              </span>
                              LET US DO THE DIRTY WORK!!
                              </h2>
                              <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                  <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                              </div>
                              <p className="leading-relaxed text-green-200 box1">
                                  Not only do we return your solar panels to the cleanest and highest production standards, we also use equipment and solution that was exclusively designed for, and approved by all solar panel manufacturers.
                              </p>
                            </div>
                        </div>
                      </div>
                      {/* Six point inspect */}
                      <div className="flex justify-center lg:py-6 lg:text-left text-center">
                        <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4 w-full" id='card2'>
                          <div className="flex-grow">
                            <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                            {/* span is inline icon */}
                            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-0 mr-2">
                                <span class="material-icons ml-0.5 mt-2" style={{fontSize: '36px'}}>
                                recycling
                                </span>
                            </span>
                              SIX POINT INSPECTION
                            </h2>
                            <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                            </div>
                            <p className="leading-relaxed text-green-200 box1">
                              Our service also includes a six-point inspection of your system. This inspection consists of checking for all items below:
                            </p>
                            <br />
                            {/* Feature list mapping */}
                            <div>
                              <ol className="list-decimal list-inside text-left text-green-200">
                                {featureList.map(feature => {
                                  return (
                                    <li key={feature.key}>{feature.description}</li>
                                  );
                                })}
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AnnualSolar />
          <FreeQuote />
        </div>
        <div>
          <ContactBlocks />
        </div>
      </section>
    )
}