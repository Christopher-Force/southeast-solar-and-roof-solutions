import iSolar from "../assets/img/iSolar.webp"
import cleaningVideo from "../assets/video/cleaningVideo.mp4"
import ContactBlocks from "../components/ContactBlocks"


export default function Factors() {
    return(
      <section className="text-green-600 body-font mx-2">
        <div className="border-2 lg:border-2 my-6 pt-4 md:pt-8">
        
          <div className="container px-5 pb-12 lg:mt-12 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-40 grid lg:gap-4 xl:gap-10">
              <div className="rounded-lg overflow-hidden">
                <img alt="feature" className="object-cover object-center h-64 w-full hidden lg:flex" src={iSolar} />
              </div>
              {/* <div class="divider-white"></div>  */}
              <div className="grid justify-items-center">
                <video className="max-w-xl lg:max-w-6xl" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline loop>
                    <source id="myvideo" src={cleaningVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                
                <div className="flex-grow">
                  
                  <h2 className="text-primary-focus text-lg title-font font-medium mb-3">Size of Your System</h2>
                  <p className="leading-relaxed text-secondary">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">

                <div className="flex-grow">
                  <h2 className="text-primary-focus text-lg title-font font-medium mb-3">Slope of The Roof</h2>
                  <p className="leading-relaxed text-secondary">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-primary-focus text-lg title-font font-medium mb-3">Number of Stories in Your Building</h2>
                  <p className="leading-relaxed text-secondary">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  {/* <a className="mt-3 text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecape="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
              <div className=" mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                    {/* span is inline icon */}
                    <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2"></span>
                    Type of Roofing Material Used
                  </h2>
                  <p className="leading-relaxed text-secondary">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  {/* <a className="mt-3 text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecape="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
            
          </div>
          <div className="pt-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <ContactBlocks />
          </div>
        </div>
      </section>
    )
}