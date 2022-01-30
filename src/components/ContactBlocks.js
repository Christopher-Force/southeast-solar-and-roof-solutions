export default function ContactBlocks () {
    return (
        // Contact Blocks
      <div className="py-5 bg-black md:py-7 lg:py-14">
      <div className="container mx-auto px-5 xl:max-w-screen-xl">
        <div className="mt-5 md:mt-7 lg:mt-14">
          {/* container */}
          <div className="w-full max-w-[800px] mx-auto space-y-5 mt-5 p-5 rounded-lg shadow-md border-0 bg-black md:mt-7">
            <div className="flex justify-center">
              {/* 3 item grid */}
              {/* <div className="space-y-5 sm:max-w-screen-sm sm:w-full sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5 md:gap-7"> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* OFFICE CELL */}
                  <div className="border-2 p-5 m-">
                    {/* ICON 1 */}
                    <div className="flex items-center sm:flex-col sm:text-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-5 rounded-full bg-white sm:mr-0">
                        {/* <svg className="w-7 h-7 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg> */}
                        <span className='mt-2'>
                          <span class="material-icons" style={{fontSize: "36px"}}>business</span>
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
                        {/* <svg className="w-7 h-7 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg> */}
                        <span className='mt-2'>
                          <span class="material-icons" style={{fontSize: "36px"}}>phone_android</span>
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
                        {/* <svg className="w-7 h-7 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg> */}
                        <span className='mt-2'>
                          <span class="material-icons" style={{fontSize: "36px"}}>email</span>
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