import React from "react";
import { useState } from "react";
import cleaningVideo from "../../assets/video/cleaningVideo.mp4"
import './ContractForm.css';
import '../../styles/inputanimation.css'
import '../../styles/borderanimation.css'

// import { useNavigate } from "react-router-dom";

export default function ContractForm () {

    // const navigate = useNavigate();

    const [formValue, setformValue] = useState({
      FIRSTNAME: '',
      LASTNAME: '',
      EMAIL: '',
      PHONE: '',
      COMPANY: ''
    });
  
    
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  
    const submitContract = (e) => {
      e.preventDefault();
    }

    // text-orange-400, text-[#8fe1ff] (blue), #00c924 (Green)

    return (
      <div className="bodygradient flex flex-col justify-center h-full mx-8 md:mx-16 pt-4">
        <div className="flex flex-col justify-center lg:pt-4">
          <h1 className="text-[#00c924] text-3xl font-bold text-center">Southeast Solar Solutions</h1><br />
  
          <h2 className="text-xl text-center">We offer professional solutions to keep your solar panels working at peak efficiency</h2><br />

            <div className="rounded-md border-2 flex justify-center ">
              <figure className="">
                <div className="block ">
                  <div className="relative ontop">
                    <video className="max-w-3xl" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline loop>
                        <source id="myvideo" src={cleaningVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <figcaption className="mt-1 p-2 text-center ontop bg-black">In Action: Our contra-rotating disc brushes specifically designed for photovoltaic systems.</figcaption>
              </figure>
            </div>
            <br /> 

          <p>
            Like an oil change for your car, solar panels also need maintenance to keep performing at their highest potential. Dirty solar panels <strong className="text-orange-400">cost you money</strong> by compromising their ability to produce power.<br /><br />

            Our carbon fiber telescoping cleaning tools can effortlessly reach every panel on any solar array, guaranteeing you a complete and professional job.<br /><br /> <strong className="text-blue-400">Every time.</strong><br /><br />
            We offer standalone (1-time you call, we clean) and 5 year annual and semiannual cleaning contracts.
            If you purchase your cleaning contract in a package with your solar system, <strong className="text-[#00c924]">you can enjoy the federal tax credit on the cost!</strong><br /><br /><br />
            
            <h1 className="text-2xl text-center text-orange-400">Take advantage of today’s discount prices for the next 5 years!</h1><br />
          </p>

        </div>
        <div className="webdesigntuts-workshop flex flex-col justify-center lg:justify-self-start pt-2">
          <form
          onSubmit={submitContract}
          className=" flex flex-col justify-center text-green-400"
          id="sub-form">
            <label for="names" className="leading-7 text-xs md:text-sm py-1">Homeowner First Name</label>
            <input 
            value={formValue.FIRSTNAME}
            onChange={handleChange}
            type="text" id="first-name" name="FIRSTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="names" className="leading-7 text-xs md:text-sm py-1">Homeowner Last Name</label>
            <input 
            value={formValue.LASTNAME}
            onChange={handleChange}
            type="text" id="last-name" name="LASTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="email" className="leading-7 text-xs md:text-sm py-1">Homeowner Email</label>
            <input
            value={formValue.EMAIL}
            onChange={handleChange}
            type="email" id="email" name="EMAIL" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="phone" className="leading-7 text-xs md:text-sm py-1">Homeowner Phone</label>
            <input value={formValue.PHONE}
            onChange={handleChange} 
            type="number" id="number" name="PHONE" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="phone" className="leading-7 text-xs md:text-sm py-1">Referring Company</label>
            <input value={formValue.COMPANY}
            onChange={handleChange} 
            type="text" id="company" name="COMPANY" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <button 
            type="submit" className="btn hover:bg-[#8fe1ff] bg-slate-900 btn-active-secondary text-lg hover:text-black text-primary-focus bg white mt-2 mb-2">Submit</button>
            <p className="text-center py-1 text-primary text-xs lg:text-sm leading-none">By submitting this information, you consent to receiving marketing communcations regarding home and solar solutions from us. We will never share your information without your explicit permission.</p>
          </form>
        </div>
      </div>
    )
}