import logoDark from "../assets/img/Logo dark.png"


export default function SolarCleaning () {
    return(
      <section class="text-green-600 body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-green-200 text-green-400">
                  <img src={logoDark} alt="Solar Logo"/>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-green-400 text-lg">Solar Cleaning</h2>
                  <div class="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-green-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">Like an oil change for your car, solar panels need maintenance to keep performing at their highest potential. Dirty solar panels cost you money by compromising their ability to produce power.

                Experts agree that dirty solar panels do not produce as much power as clean ones. According to the National Renewable Energy Lab, the loss may be as high as 25% annually. In industrial areas, locations of high traffic, high agricultural activities, close proximity to saltwater, and high pollen regions it may be even worse.

                Let us do the dirty work!

                Not only do we return your solar panels to the cleanest and highest production standards, we use equipment and solution exclusively designed for, and approved by all solar panel manufacturers. Our service also includes a six-point inspection of your system. 
                This inspection consists of checking for:

                1. The integrity of your panel - We look for chips, cracks and delamination
                2. The framework for corrosion and loose fittings
                3. All roof penetrations for potential leak development
                4. Damage from birds or nesting animals
                5. The integrity of all mounting brackets to ensure a tight and proper fit
                6. Any possible inverter error codes
                </p>
                <a class="text-green-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}