import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PopupContact() {

  const navigate = useNavigate();

  const [formValue, setformValue] = useState({
    Name: '',
    Email: '',
    Phone: ''
  });

  const handleSubmit = (e)  =>  {
      e.preventDefault();
      console.log(e.target)
      const data = new FormData(e.target);
      const action = e.target.action
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(navigate('/thankyou'))
      .then(window.location.reload(false))
  }
  

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    // Contact Blocks
    <div className="lg:pb-4 lg:pt-8 h-full w-full">
      <div className="grid grid-cols-1">
          <h1 className="text-center title-font font-bold text-md lg:text-2xl text-orange-400">Contact Us Below For 15% Off Your Free Estimate!</h1>
          <div className="w-36 md:w-96 h-1 bg-orange-500 rounded mt-2 mb-4 justify-self-center"></div>

          <p className="text-center text-sm lg:text-xl text-[#8fe1ff] py-1">We are available 7 days a week 7:30AM - 8:00PM EST!</p>
      </div>
      <div className="container mx-auto lg:px-5">
        <div className="mt-1 lg:mt-5 md:mt-7 lg:mt-14">
          {/* container */}
          <div className="w-full md:w-11/12 mx-auto lg:mt-5 rounded-lg shadow-md border-0 md:mt-7">
            <div className="flex justify-center">
              {/* 3 item grid */}
              {/* <div className="space-y-5 sm:max-w-screen-sm sm:w-full sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5 md:gap-7"> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                  {/* OFFICE CELL */}
                  <div className="hidden md:block border-2 p-1 md:p-5">
                    {/* ICON 1 */}
                    <div className="flex items-center sm:flex-col sm:text-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-5 rounded-full bg-white sm:mr-0">
                        <span className='mt-2'>
                          <span className="material-icons text-black" style={{fontSize: "36px"}}>business</span>
                        </span>
                      </div>
                      {/* TEXT */}
                      <div className="break-all text-sm text-green-400 sm:mt-2.5 underline-offset-4">
                        <a href="tel:800-240-4055"><u>OFFICE: (800) 240-4055</u></a>
                      </div>
                    </div>
                  </div>
                  {/* CELL CELL */}
                  <div className="border-2 p-1 md:p-5">
                    {/* ICON 2*/}
                    <div className="flex items-center sm:flex-col sm:text-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-5 rounded-full bg-white sm:mr-0">
                        <span className='hidden md:block mt-2'>
                          <span className="material-icons text-black" style={{fontSize: "36px"}}>phone_android</span>
                        </span>
                        <span className='md:hidden mt-2'>
                          <span className="material-icons text-black" style={{fontSize: "24px"}}>phone_android</span>
                        </span>
                      </div>
                      {/* text  */}
                      <div className="break-all text-sm text-green-400 sm:mt-2.5 underline-offset-4">
                        <a href="tel:727-423-1716"><u>CELL: (727) 423-1716</u></a>
                      </div>
                    </div>
                  </div>
                  {/* EMAIL CELL */}
                  <div className="border-2 p-1 md:p-5">
                    {/* ICON 3*/}
                    <div className="flex items-center sm:flex-col sm:text-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-5 rounded-full bg-white sm:mr-0">
                        <span className='hidden md:block mt-2'>
                          <span className="material-icons text-black" style={{fontSize: "36px"}}>email</span>
                        </span>
                        <span className='md:hidden mt-2'>
                          <span className="material-icons text-black" style={{fontSize: "24px"}}>email</span>
                        </span>
                      </div>
                      {/* text */}
                      <div className="break-all text-sm text-green-400 sm:mt-2.5 underline-offset-4">
                        <a href="mailto:southeastsolarsolutions@gmail.com"><u>Southeastsolarsolutions@gmail.com</u></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <div className="w-3/4 h-0.5 bg-primary-focus rounded mt-4 mb-4"></div>
      </div>
      {/* second half */}
      <div className="flex flex-col lg:flex-row justify-center lg:pt-0 h-full">
          <div className="lg:basis-3/5 flex flex-col justify-center lg:justify-start lg:pt-4">
                  <h3 className="text-center lg:text-left font-bold text-md lg:text-2xl text-orange-400 lg:px-12">Not ready yet?</h3>
                  <p className="text-center lg:text-left py-1 text-[#8fe1ff] lg:px-12 text-sm lg:text-xl">Fill out the form to have an associate contact you within 24 hours!</p>
          </div>
          <div className="lg:basis-2/3 flex flex-col justify-center md:ml-2 lg:justify-self-start pt-2">
            <form
            method="POST"
            action = "https://script.google.com/macros/s/AKfycbysOen8stIGov1Rfrp9bZJNxho3BC_6S4f5DSqULETjcgrutLreyEDVQNEyOEJY35cn4A/exec"
            // onSubmit={handleSubmit}
            className="flex flex-col text-green-400 lg:mr-24"
            id="sub-form">
              <label for="names" className="leading-7 text-xs md:text-sm">Name</label>
              <input 
              value={formValue.Name}
              onChange={handleChange}
              type="text" id="name" name="Name" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
              <label for="email" className="leading-7 text-xs md:text-sm">Email</label>
              <input
              value={formValue.Email}
              onChange={handleChange}
              type="email" id="email" name="Email" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
              <label for="phone" className="leading-7 text-xs md:text-sm">Phone</label>
              <input value={formValue.Phone}
              onChange={handleChange} 
              type="number" id="number" name="Phone" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
              <button type="submit" className="btn hover:bg-[#8fe1ff] bg-slate-900 btn-active-secondary text-lg hover:text-black text-primary-focus bg white mt-2 mb-2">Submit</button>
            </form>
            <p className="lg:w-4/5 text-center lg:text-left py-1 text-primary text-xs lg:text-sm leading-none">By submitting this information, you consent to receiving marketing  communcations regarding home and solar solutions from us. We will never share your information without your explicit permission.</p>
          </div>
      </div>
    </div>
  )
};