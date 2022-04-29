import ContactBlocks from "../components/ContactBlocks";
import RoofShampooVid1 from "../components/RoofShampooVid1";
import React, {useEffect} from "react";
import ScrollReveal from 'scrollreveal'



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
                <div className="container px- pb-12 lg:mt-12 mx-auto">
                    {/* title */}
                    <div className=""  id="topreveal">
                        <h2 className="text-primary-focus text-lg title-font font-medium text-center mt-6 lg:-mt-6 ">
                            Gutter Cleaning
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
                                Selling Point 1
                                </h2>
                                <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                    <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                                </div>
                                <p className="leading-relaxed text-green-200 box1">
                                    Roof Shampoo® is the green, eco-friendly roof cleaning solution for asphalt and fiberglass shingles. Roof Shampoo® does NOT contain dangerous chlorine bleach or phosphates. The Roof Shampoo® roof cleaning method uses safe, effective, eco-friendly roof cleaning products to clean those ugly roof stains and will not harm any landscaping around your home.
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
                                        Selling Point 2
                                    </h2>
                                    <div className="flex flex-col items-center text-center lg:items-start justify-center">
                                        <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                        When Roof Shampoo® roof cleaning technicians leave your house, your algae stained roof will be STAIN FREE. No waiting for rain, no wondering, and no worrying if the stains will really go away as with other roof cleaning methods. With Roof Shampoo® you will able to see for yourself - instantly. Results are IMMEDIATE and Complete!
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
                                    Selling Point 3
                                </h2>
                                <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                    <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                </div>
                                <p className="leading-relaxed text-green-200">
                                    The cleaner your roof, the healthier your roof!  Roof Shampoo® professionals use state-of-the-art equipment that delivers a soft, gentle low pressure water wash. NEVER damaging high pressure and absolutely NO scrubbing or brushing. There is no need to prematurely re-roof. Your Roof Shampoo contractor will make your dirty roof look new again.  Go with the true GREEN, roof cleaning method for cleaning roof stains, Roof Shampoo®.
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
                                        Selling Point 4
                                    </h2>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                        The proprietary Roof Shampoo® ultra-light low pressure aluminum sprinkler-disc rinse system was engineered specifically for use on asphalt and fiberglass shingles. The sprinkler-disc rinser delivers a gentle, soft water rinse completely safe for all roof surfaces. NEVER damaging high pressure and absolutely NO scrubbing or brushing!
                                    </p>
                                    <br />
                                </div>
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