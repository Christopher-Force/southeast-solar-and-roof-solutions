import React from "react";
import { useState } from "react";
import cleaningVideo from "../../assets/video/cleaningVideo.mp4"
import sixBubble from "../../assets/img/sixBubble.png";
import dirtyBubble from "../../assets/img/dirtyBubble.png";
import iSolar from "../../assets/img/iSolar.webp"
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
      COMPANY: '',
      COMPANYPHONE: '',
      SALESPERSON: ''
    });
  
    
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  
    const submitContract = (e) => {
      e.preventDefault();
      fetch('https://script.google.com/macros/s/AKfycbzShg_scb9UKDq-yXrsVZnA5_kYXRo1JcyiatfmjMmn2_PtvELJozXLpae6ZHTe0WvZRg/exec', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
          if(user.id){ // does the user exist? Did we receive a user with a property of id?
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
      })
    }

    const featureList = [
      {description: 'The integrity of your panel - We look for chips, cracks and delamination', key: 0},
      {description: 'The framework for corrosion and loose fittings', key: 1},
      {description: 'All roof penetrations for potential leak development', key: 2},
      {description: 'Damage from birds or nesting animals', key: 3},
      {description: 'The integrity of all mounting brackets to ensure a tight and proper fit', key: 4},
      {description: 'Any possible inverter error codes', key: 5}
    ];

    // text-orange-400, text-[#8fe1ff] (blue), #00c924 (Green)

    return (
      <div className="bodygradient flex flex-col justify-center h-full mx-8 md:mx-16 pt-4 pb-8">
        <div className="flex flex-col justify-center lg:pt-4">
          <h1 className="text-[#00c924] text-3xl font-bold text-center">Southeast Solar Solutions</h1><br />
  
          <h2 className="text-xl text-center pb-2 text-orange-400">We offer professional solutions to keep your solar panels working at peak efficiency!</h2><br />

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
          </p>
        </div>
        {/* Two Solar Cards */}
        <div className=" grid grid-cols-1 justify-center mx-auto">
          {/* Dirty Work */}
          <div className="flex justify-center lg:text-left text-center">
            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id='card1'>
                <div className="flex-grow">
                  <div className="flex flex-row justify-center lg:justify-start h-12">
                      <img src={dirtyBubble} alt="eco friendly" className="w-12 h-12" />
                      <span className="align-center">
                          <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                              LET US DO THE DIRTY WORK!!
                          </h2>
                      </span>
                  </div>
                  
                  <div className="flex flex-col items-center lg:items-start text-center justify-center">
                      <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                  </div>
                  {/* MEDIA1 */}
                <div className="rounded-lg overflow-hidden pb-4">
                  <img alt="feature" className="object-cover object-center h-64 w-full flex" src={iSolar} />
                </div>
                  <p className="leading-relaxed text-green-200 box1">
                      Not only do we return your solar panels to the cleanest and highest production standards, we also use equipment and solution that was exclusively designed for, and approved by all solar panel manufacturers.
                  </p>
                </div>
            </div>
          </div>
          {/* Six point inspect */}
          <div className="flex justify-center lg:text-left text-center">
            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4 w-full" id='card2'>
              <div className="flex-grow">
                <div className="flex flex-row justify-center lg:justify-start h-12">
                    <img src={sixBubble} alt="eco friendly" className="w-12 h-12" />
                    <span className="align-center">
                        <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                            SIX POINT INSPECTION
                        </h2>
                    </span>
                </div>
                
                <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                    <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                </div>
                
                <p className="leading-relaxed text-green-200 box1">
                  Our service also includes a six-point inspection of your system. This inspection consists of checking for all items below:
                </p>
                <br />
                {/* Feature list mapping */}
                <div>
                  <ol className="list-decimal list-inside text-left text-green-200">
                    {featureList.map(feature => {
                      return (
                        <li key={feature.key}>{feature.description}</li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="webdesigntuts-workshop flex flex-col justify-center lg:justify-self-start pt-2">
          <form
          onSubmit={submitContract}
          className=" flex flex-col justify-center text-green-400"
          id="sub-form">
            <span><h1 className="text-2xl text-center text-orange-400 pb-4">Take advantage of today’s discount prices for the next 5 years!</h1><br /></span>
            <label for="names" className="leading-7 text-xs md:text-sm py-1">Homeowner's First Name</label>
            <input 
            value={formValue.FIRSTNAME}
            onChange={handleChange}
            type="text" id="first-name" name="FIRSTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="names" className="leading-7 text-xs md:text-sm py-1">Homeowner's Last Name</label>
            <input 
            value={formValue.LASTNAME}
            onChange={handleChange}
            type="text" id="last-name" name="LASTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="email" className="leading-7 text-xs md:text-sm py-1">Homeowner's Email</label>
            <input
            value={formValue.EMAIL}
            onChange={handleChange}
            type="email" id="email" name="EMAIL" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="phone" className="leading-7 text-xs md:text-sm py-1">Homeowner's Phone</label>
            <input value={formValue.PHONE}
            onChange={handleChange} 
            type="number" id="number" name="PHONE" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="company" className="leading-7 text-xs md:text-sm py-1">Referring Company</label>
            <input value={formValue.COMPANY}
            onChange={handleChange} 
            type="text" id="company" name="COMPANY" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="COMPANYPHONE" className="leading-7 text-xs md:text-sm py-1">Referring Company's Phone</label>
            <input value={formValue.COMPANYPHONE}
            onChange={handleChange} 
            type="text" id="company-phone" name="COMPANYPHONE" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="SALESPERSON" className="leading-7 text-xs md:text-sm py-1">Salesperson's Name</label>
            <input value={formValue.SALESPERSON}
            onChange={handleChange} 
            type="text" id="salesperson" name="SALESPERSON" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            
            <div class="form-control">
              <label class="label cursor-pointer justify-start">
                 
                <input type="radio" name="radio-6" class="checked:bg-green-500 " required />
                <span class="label-text ml-2">5-Year Annual Contract</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer justify-start">
                
                <input type="radio" name="radio-6" class="checked:bg-green-500 " required />
                <span class="label-text ml-2">5-Year Semi-Annual Contract</span>
              </label>
            </div>
            <button 
            type="submit" className="btn hover:bg-[#8fe1ff] bg-slate-900 btn-active-secondary text-lg hover:text-black text-primary-focus bg white mt-2 mb-2">Submit</button>
            <p className="text-center py-1 text-primary text-xs lg:text-sm leading-none">By submitting this information, you consent to receiving marketing communcations regarding home and solar solutions from us. We will never share your information without your explicit permission.</p>
          </form>
        </div>
      </div>
    )
}