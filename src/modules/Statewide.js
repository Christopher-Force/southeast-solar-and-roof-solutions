// import logoDark from "../assets/img/Logo dark.png"
// import MaterialIcon from 'material-icons-react';


export default function Statewide () {

  const featureList = [
    {description: 'The integrity of your panel - We look for chips, cracks and delamination', key: 0},
    {description: 'The framework for corrosion and loose fittings', key: 1},
    {description: 'All roof penetrations for potential leak development', key: 2},
    {description: 'Damage from birds or nesting animals', key: 3},
    {description: 'The integrity of all mounting brackets to ensure a tight and proper fit', key: 4},
    {description: 'Any possible inverter error codes', key: 5}
  ];

    return(
      <section class="text-green-600 body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
            </div>
            {/* Entire text content region */}
            <div class="flex flex-col sm:flex-row mt-10 md:ml-24 lg:ml-0">
              <div class="sm:w-5/6 lg:w-full sm:pl-8 sm:py-8 sm:border-l border-green-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-0 text-green-400 text-2xl">Solar Panel Cleaning                 
                  {/* <span className="pl-2">
                    <MaterialIcon icon="invert_colors" color="#FAFAFA" />
                  </span> */}
                </h2>
                <div class="w-24 h-1 bg-green-500 rounded mt-2 mb-4"></div>
              </div>
              <br />
              <div class="leading-relaxed text-lg mb-4 text-green-300">
                <p>Like an oil change for your car, solar panels also need maintenance to keep performing at their highest potential. Dirty solar panels cost you money by compromising their ability to produce power.</p>
                <br />
                <p>Experts agree that dirty solar panels do not produce as much power as clean ones. According to the National Renewable Energy Lab, the loss may be as high as 25% annually. In industrial areas, locations of high traffic, high agricultural activities, close proximity to saltwater, and high pollen regions it may be even worse.</p>
                <br />
                <p>LET US DO THE DIRTY WORK!!</p>
                <br />
                <p>Not only do we return your solar panels to the cleanest and highest production standards, we also use equipment and solution that was exclusively designed for, and approved by all solar panel manufacturers. </p>
                <br />
                <p>Our service also includes a six-point inspection of your system. </p>
                <br />
                <p>This inspection consists of checking for:</p>
                <br />
                <p>
                  <ol className="list-decimal  list-inside">
                    {featureList.map(feature => {
                      return (
                        <li key={feature.key}>{feature.description}</li>
                      );
                    })}
                  </ol>
                </p>
                </div>
                <div class="text-green-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}