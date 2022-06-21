import iSolar from "../assets/img/iSolar.webp"
import ContactBlocks from "../components/ContactBlocks"


export default function Factors() {
  return(
    <section className="text-green-600 body-font mx-2">
      <div className=" my-6 ">
      
      <div className="mx-4 flex justify-center lg:text-left text-center">
            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md shadow-2xl shadow-slate-500 px-4 w-full" id='card2'>
              <div className="flex flex-col flex-wrap py-6 -mb-10 lg:text-left text-center">
                <h2 className="text-primary-focus text-lg title-font font-medium text-center">
                  {/* span is inline icon */}
                  We Observe Four Factors That May Affect Your Pricing
                </h2>
                <div className="flex flex-col items-center text-center justify-center">
                  <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 "></div>
                </div>
                {/* MEDIA1 */}
                <div className="rounded-lg overflow-hidden pb-4">
                  <img alt="feature" className="object-cover object-center h-64 w-full flex" src={iSolar} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* First card */}
                  <div className="flex flex-col md:mb-10 lg:items-start items-center p-4">
                  
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
                  {/* Second Card */}
                  <div className="p-4 flex flex-col md:mb-10 lg:items-start items-center">
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
                  {/* Third Card */}
                  <div className="p-4 flex flex-col md:mb-10 lg:items-start items-center">
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
                  {/* Fourth Card */}
                  <div className="p-4 mb-10 lg:items-start items-center">
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
            </div>
          </div>
        <div className="mx-4 border-2 bg-gradient-to-r from-gray-800 to-gray-900">
          <ContactBlocks />
        </div>
      </div>
    </section>
  )
}