import ContactBlocks from "../components/ContactBlocks";
import RoofShampooVid1 from "../components/RoofShampooVid1";
import React, {useEffect} from "react";
import ScrollReveal from 'scrollreveal'
import AnnualGutters from "../components/AnnualGutters";



export default function GutterCleaning () {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: false,
        });
        // card reveaks
        sr.reveal(
            `
            #topreveal
            `,
            {
                opacity: 0,
                interval: 100
            }
        );
        // cleaning methods
        sr.reveal(
            `
            #cleaningtitle
            `,
            {
                origin: "left",
                interval: 200
            }
        );
        sr.reveal(
            `
            #video2
            `,
            {
                origin: "bottom",
                interval: 100
            }
        )
    }, []);
        
            
    return (
        <section className="text-green-600 body-font mx-2">
            <div className=" pt-4 md:pt-8">
                <RoofShampooVid1 />
                <div className="container lg:mt-12 mx-auto">
                    {/* title */}
                    <div className=""  id="topreveal">
                        <h2 className="text-primary-focus text-lg title-font font-medium text-center mt-6 lg:-mt-6 ">
                            Professional Gutter Cleaning
                        </h2>
                        <div className="flex flex-col items-center text-center justify-center">
                            <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 " />
                        </div>
                    </div>
                    <div>
                        {/* 4 container */}
                        <div className="grid lg:grid-cols-2 justify-center lg:py-6 lg:text-left text-center">
                        
                            {/* eco-friendly */}
                            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id='card1'>
                                <div className="flex-grow">
                                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                                {/* span is inline icon */}
                                <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-0 mr-2">
                                    <span class="material-icons ml-0.5 mt-2" style={{fontSize: '36px'}}>
                                    recycling
                                    </span>
                                </span>
                                Live Camera
                                </h2>
                                <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                    <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                                </div>
                                <p className="leading-relaxed text-green-200 box1">
                                    At Southeast Solar Solutions, we utilize state-of-the-art technology that allows the operator to view close-up live camera feed to tactically remove the nasty debris.
                                </p>
                                </div>
                            </div>
                            {/* stain free */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='card2'>
                                <div className="flex-grow">
                                    <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                                        {/* span is inline icon */}
                                        <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                            <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                            flare
                                            </span>
                                        </span>
                                        No Liability
                                    </h2>
                                    <div className="flex flex-col items-center text-center lg:items-start justify-center">
                                        <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                        When carrying out our gutter cleaning, we perform every operation from the ground. This removes the liability typically involved with traditional gutter cleaning methods.
                                    </p>
                                </div>
                            </div>
                            {/* non damaging */}
                            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id="card3">
                                <div className="flex-grow">
                                <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                                    <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2 ">
                                        <span class="material-icons ml-0 mt-2" style={{fontSize: '36px'}}>
                                        sentiment_very_satisfied
                                        </span>
                                    </span>
                                    Quick Work, No Mess.
                                </h2>
                                <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                    <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                </div>
                                <p className="leading-relaxed text-green-200">
                                    Our powerful gear makes setting-up, performing cleaning, and break-down quick, easy, and simple for everyone. Additionally, our equipment provides us with internal storage for debris while cleaning, so there is no mess. 
                                </p>
                                </div>
                            </div>
                            {/* Gentle */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='card4'>
                                <div className="flex-grow">
                                    <h2 className="text-primary-focus text-lg title-font font-medium mb-3">
                                        {/* span is inline icon */}
                                        <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                            <span class="material-icons ml-0.5 mt-2" style={{fontSize: '36px'}}>
                                            health_and_safety
                                            </span>
                                        </span>
                                        Three Stories Of Reach, Powered By Us.
                                    </h2>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                    Cleaning up to three stories high without ever leaving the ground! Your house will be free of ladders and we provide our own power source, so you wouldn't have to provide any hook-ups whatsoever.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <AnnualGutters />
                </div>
                
                <div className="pt-20 bg-gradient-to-r from-gray-800 to-gray-900">
                    <ContactBlocks />
                </div>
            </div>
        </section>
    )
}