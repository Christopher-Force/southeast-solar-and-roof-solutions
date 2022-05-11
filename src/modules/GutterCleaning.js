import ContactBlocks from "../components/ContactBlocks";
import React, {useEffect} from "react";
import ScrollReveal from 'scrollreveal'
import AnnualGutters from "../components/AnnualGutters";
import GutterVid1 from "../components/GutterVid1";
import cameraBubble from "../assets/img/cameraBubble.png";
import liabilityBubble from "../assets/img/liabilityBubble.png";
import quickBubble from "../assets/img/quickBubble.png";
import tallBubble from "../assets/img/tallBubble.png";


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
            #livecamera
            `,
            {
                origin: "left",
                interval: 200,
                duration: 2000,
            }
        );
        sr.reveal(
            `
            
            #quickwork,
            #contracts
            `,
            {
                origin: "left",
                delay: 600,
                interval: 200,
                duration: 2000,
            }
        );
        sr.reveal(
            `
            #liability
            `,
            {
                origin: "bottom",
                delay: 200,
                interval: 200,
                duration: 2000
            }
        );
        sr.reveal(
            `
            #threestories
            `,
            {
                origin: "right",
                delay: 400,
                interval: 200,
                duration: 2300
            }
        );
    }, []);
        
            
    return (
        <section className="text-green-600 body-font mx-2">
            <div className=" pt-4 md:pt-8">
                <GutterVid1 />
                <div className="container lg:mt-12 mx-auto">
                    {/* title */}
                    <div id="topreveal">
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
                        
                            {/* live-camera */}
                            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id='livecamera'>
                                <div className="flex-grow">
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={cameraBubble} alt="live camera" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                Live Camera
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-4 mb-4 " />
                                    </div>
                                    <p className="leading-relaxed text-green-200 box1">
                                        At Southeast Solar Solutions, we utilize state-of-the-art technology that allows the operator to view close-up live camera feed to tactically remove the nasty debris.
                                    </p>
                                </div>
                            </div>
                            {/* liability */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='liability'>
                                <div className="flex-grow">
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={liabilityBubble} alt="live camera" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                Minimized Liability
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center text-center lg:items-start justify-center pt-1">
                                        <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                        When carrying out our gutter cleaning, we perform almost every operation from the ground. This removes the liability typically involved with traditional gutter cleaning methods.
                                    </p>
                                </div>
                            </div>
                            {/* quick */}
                            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id="quickwork">
                                <div className="flex-grow">
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={quickBubble} alt="live camera" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                Quick Work, No Mess.
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center pt-1">
                                        <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                <p className="leading-relaxed text-green-200">
                                    Our powerful gear makes setting-up, cleaning, and breaking-down quick, easy, and simple for everyone. Additionally, our equipment provides us with internal storage for debris while cleaning, so there is no mess. 
                                </p>
                                </div>
                            </div>
                            {/* three stories */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='threestories'>
                                <div className="flex-grow">
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={tallBubble} alt="live camera" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                3 Stories Of Reach - Powered By Us.
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center pt-1">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                    Cleaning up to three stories high typically without ever leaving the ground! Your house will be free of ladders. We provide our own power source, so you wouldn't have to provide any hook-ups whatsoever.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contracts">
                    <AnnualGutters />
                </div>
                
                <div>
                    <ContactBlocks />
                </div>
            </div>
        </section>
    )
}