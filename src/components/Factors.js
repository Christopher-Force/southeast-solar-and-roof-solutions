import iSolar from "../assets/img/iSolar.webp"
import cleaningVideo from "../assets/video/cleaningVideo.mp4"
import ContactBlocks from "../components/ContactBlocks"


export default function Factors() {
  return(
    <section className="text-green-600 body-font mx-2">
      <div className="border-2 lg:border-2 my-6 pt-4 md:pt-8">
      
        <div className="container px-5 pb-12 lg:mt-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full grid lg:gap-4 xl:gap-10 content-between">
            {/* MEDIA1 */}
            <div className="rounded-lg overflow-hidden">
              <img alt="feature" className="object-cover object-center h-64 w-full hidden lg:flex" src={iSolar} />
            </div>
            {/* MEDIA 2 */}
            <div className="grid justify-items-center align-items-end">
              <video className="max-w-xl lg:max-w-6xl" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline loop>
                  <source id="myvideo" src={cleaningVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <h2 className="text-primary-focus text-lg title-font font-medium text-center mt-6 lg:-mt-6">
              {/* span is inline icon */}
              We Observe Four Factors That May Affect Your Pricing
            </h2>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 "></div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              
              <div className="flex-grow">
                
                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                  {/* span is inline icon */}
                  <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-0 mr-2">
                    <span class="material-icons ml-1.5 mt-1" style={{fontSize: '36px'}}>
                      square_foot
                    </span>
                  </span>
                  Size of Your System
                </h2>
                <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                  <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 "></div>
                </div>
                <p className="leading-relaxed text-green-200">
                  This one is easy to understand. If you have 30 panels on your roof, then it should cost you less money than
                  a roof with 60 panels.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                  {/* span is inline icon */}
                  <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                    <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                      stacked_line_chart
                    </span>
                  </span>
                  Slope of The Roof
                </h2>
                <div className="flex flex-col items-center text-center lg:items-start justify-center">
                  <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4"></div>
                </div>
                <p className="leading-relaxed text-green-200">
                  If your roof angle is such that it's difficult to stand on or we need special equipment to access it, then
                  this will factor in the price.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                  <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                    <span class="material-icons ml-0 mt-2" style={{fontSize: '36px'}}>
                      house_siding
                    </span>
                  </span>                    
                  Number of Stories
                </h2>
                <div className="flex flex-col items-center lg:items-start text-center justify-center">
                  <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4"></div>
                </div>
                <p className="leading-relaxed text-green-200">
                This will be an extra cost if your home is more than two stories tall, or if the roof is difficult to access.
                </p>
              </div>
            </div>
            <div className=" mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                  {/* span is inline icon */}
                  <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                    <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                      carpenter
                    </span>
                  </span>
                  Roofing Material Type
                </h2>
                <div className="flex flex-col items-center lg:items-start text-center justify-center">
                  <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4"></div>
                </div>

                <p className="leading-relaxed text-green-200">
                Roofing materials vary in terms of how simple they are to work with and whether or not you can walk on them. Some roofs will need an extra charge.
                </p>
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