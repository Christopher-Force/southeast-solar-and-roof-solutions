export default function ContactBlocks () {
    return (
        // Contact Blocks
      <div className="pb-5 bg-gradient-to-r from-gray-800 to-gray-900 md:pb-7 lg:pb-14 pt-16">
        <div className="grid grid-cols-1">
            <h1 className="text-center title-font text-2xl text-orange-400">Click your preferred contact method below for your free estimate!</h1>
            <div className="w-36 md:w-96 h-1 bg-orange-500 rounded mt-2 mb-4 justify-self-center"></div>
        </div>
        <div className="container mx-auto px-5 xl:max-w-screen-xl">
          <div className="mt-5 md:mt-7 lg:mt-14">
            {/* container */}
            <div className="w-full max-w-[800px] mx-auto space-y-5 mt-5 p- rounded-lg shadow-md border-0 md:mt-7">
              <div className="flex justify-center">
                {/* 3 item grid */}
                {/* <div className="space-y-5 sm:max-w-screen-sm sm:w-full sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5 md:gap-7"> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* OFFICE CELL */}
                    <div className="border-2 p-5 m-">
                      {/* ICON 1 */}
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-5 rounded-full bg-white sm:mr-0">
                          <span className='mt-2'>
                            <span class="material-icons text-black" style={{fontSize: "36px"}}>business</span>
                          </span>
                        </div>
                        {/* TEXT */}
                        <div className="break-all text-green-400 sm:mt-2.5 underline-offset-4">
                          <a href="tel:800-240-4055"><u>OFFICE: (800) 240-4055</u></a>
                        </div>
                      </div>
                    </div>
                    {/* CELL CELL */}
                    <div className="border-2 p-5">
                      {/* ICON 2*/}
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-5 rounded-full bg-white sm:mr-0">
                          <span className='mt-2'>
                            <span class="material-icons text-black" style={{fontSize: "36px"}}>phone_android</span>
                          </span>
                        </div>
                        {/* text  */}
                        <div className="break-all text-green-400 sm:mt-2.5 underline-offset-4">
                          <a href="tel:727-423-1716"><u>CELL: (727) 423-1716</u></a>
                        </div>
                      </div>
                    </div>
                    {/* EMAIL CELL */}
                    <div className="border-2 p-5">
                      {/* ICON 3*/}
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-5 rounded-full bg-white sm:mr-0">
                          <span className='mt-2'>
                            <span class="material-icons text-black" style={{fontSize: "36px"}}>email</span>
                          </span>
                        </div>
                        {/* text */}
                        <div className="break-all text-green-400 sm:mt-2.5 underline-offset-4">
                          <a href="mailto:southeastsolarsolutions@gmail.com"><u>Southeastsolarsolutions@gmail.com</u></a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}