import React from "react";
import { useState } from "react";
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

    return (
        <div className="flex flex-col justify-center h-full mx-8 md:mx-16">
          <div className=" flex flex-col justify-center lg:pt-4">
                  <h3 className="text-center font-bold text-md lg:text-2xl text-orange-400 lg:px-12">Contract Sign-Up Demo</h3>
                  <p className="text-center py-1 text-[#8fe1ff] lg:px-12 text-sm lg:text-xl">Fill out the form to store information.</p>
          </div>
          <div className=" flex flex-col justify-center md:ml-2 lg:justify-self-start pt-2">
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