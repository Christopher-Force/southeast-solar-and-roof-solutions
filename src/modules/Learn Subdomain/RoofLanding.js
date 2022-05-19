import ContactBlocks from "../../components/ContactBlocks";
import ecoBubble from "../../assets/img/ecoBubble.png";
import stainBubble from "../../assets/img/stainBubble.png";
import nondamagingBubble from "../../assets/img/nondamagingBubble.png";
import gentleBubble from "../../assets/img/gentleBubble.png";
import confusionBubble from "../../assets/img/confusionBubble.png";
import checkBubble from "../../assets/img/checkBubble.png";
import xBubble from "../../assets/img/xBubble.png";
import roof1 from "../../assets/img/roof1.png"
import roof2 from "../../assets/img/roof2.png"
import roof3 from "../../assets/img/roof3.png"
import roof4 from "../../assets/img/roof4.png"

import "../../styles/roofshampoo.css";
import React, {useEffect} from "react";
import ScrollReveal from 'scrollreveal';
import PopupContact from "../../components/PopupContact";
import 'tw-elements';



export default function RoofLanding () {
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
            #topreveal,
            
            #ecotitle,
            #eco1,
            #eco2,
            #eco3,
            #eco4,
            #bleachtitle,
            #bleach1,
            #bleach2,
            #bleach3,
            #bleach4,
            #bleach5,
            #bleach6,
            #splashtitle,
            #splash1,
            #pressuretitle,
            #pressure1,
            #testtitle

            `,
            {
                opacity: 0,
                interval: 100
            }
        );
        // cleaning methods
        sr.reveal(
            `
            #cleaningtitle,
            #clean1,
            #clean2,
            #clean3,
            #card1,
            #card2,
            #card3,
            #card4,
            #test3,
            #test2,
            #test1,
            #quote-now
            `,
            {
                origin: "left",
                interval: 100
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
        );
        sr.reveal(
            `
            #card5,
            #card6,
            #card7,
            #card8
            `,
            {
                origin: "right",
                interval: 100
            }
        );
    }, []);
        
    
    return (
        <section className="text-green-600 body-font mx-2 ">
            <div className="">
                <div className=""  id="topreveal">
                    <h2 className="text-orange-400 lg:text-3xl title-font font-bold text-center mt-6 ">
                        Increase Your Home's Curb Appeal With A Roof Shampoo!
                    </h2>
                    <div className="flex flex-col items-center text-center justify-center ">
                        <div className="w-3/5 lg:w-2/5 h-1 bg-orange-400 rounded mt-2 " />
                    </div>
                </div>
                <div className="container lg:flex justify-center mb-12 lg:mt-12 mx-auto">
                    
                    <div className="basis-1/2 m-4 lg:mr-8">
                        <label htmlFor="roof-popup" className="modal-button">
                            {/* carousel */}
                            <div
                            id="carouselExampleCrossfade"
                            class="carousel slide carousel-fade relative"
                            data-bs-ride="carousel"
                            >
                            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                                ></button>
                                <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                ></button>
                                <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                ></button>
                                <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                                ></button>
                            </div>
                            <div class="carousel-inner relative w-full overflow-hidden">
                                <div class="carousel-item active float-left w-full">
                                <img
                                    src={roof1}
                                    class="block w-full"
                                    alt="roof 1"
                                />
                                </div>
                                <div class="carousel-item float-left w-full">
                                <img
                                    src={roof2}
                                    class="block w-full"
                                    alt="roof 2"
                                />
                                </div>
                                <div class="carousel-item float-left w-full">
                                <img
                                    src={roof3}
                                    class="block w-full"
                                    alt="roof 3"
                                />
                                </div>
                                <div class="carousel-item float-left w-full">
                                <img
                                    src={roof4}
                                    class="block w-full"
                                    alt="roof 4"
                                />
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                            
                            {/* <img src={} alt="before and after" className=" cursor-pointer hover:brightness-110" /> */}
                        </label>
                    </div>
                    <div className="basis-1/3 m-4">
                        <h2 className="text-md lg:text-xl title-font font-bold text-primary-focus"><label htmlFor="roof-popup" className="underline cursor-pointer hover:text-orange-400">Contact Us</label> For 15% Off Your Free Estimate!</h2>
                        <p className="text-[#8fe1ff] text-xs sm:text-sm md:text-md xl:text-lg pt-4 pb-4">We have great reasons to believe we're the best. A Roof Shampoo will provide with immediate results that you can see from the road. We're not kidding. While we're on the roof, more often than not the neighbors come out and watch our amazing process! 
                        <br />
                        <br />
                        For a limited time, we are offering a <label htmlFor="roof-popup" className="underline cursor-pointer text-blue-500 hover:text-orange-400">15% discount</label> for new customers who are looking to increase their home curb appeal. <label htmlFor="roof-popup" className="underline cursor-pointer text-blue-500 hover:text-orange-400">Click below</label> for your free estimate!</p>
                        <label for="roof-popup" className="btn modal-button hover:bg-[#8fe1ff] bg-slate-900 btn-active-secondary text-lg hover:text-black text-primary-focus bg white">Get Free Quote</label>
                    </div>
                </div>
                {/* Confusion section */}
                <div className="flex justify-center bg-slate-800 py-8 lg:py-4 " style={{"background":"radial-gradient(circle at 50% 20%, #1e4600, #252c49)"}}>
                    <div className="container border-2 py-4 bg-slate-900">
                        {/* Confusion title */}
                        <div className="flex flex-col items-center text-center justify-center" id="cleaningtitle">
                            <div className="flex flex-row justify-center lg:justify-start h-12">
                                <img src={confusionBubble} alt="eco friendly" className="w-12 h-12" />
                                <span className="align-center">
                                    <h2 className="pl-2 text-orange-400 text-lg title-font font-bold mb-3 py-3">
                                        Let's Clear Up The Confusion
                                    </h2>
                                </span>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <div className="w-52 h-1 bg-orange-400 rounded mt-2 mb-8 " />
                            </div>
                        </div>
                        
                        <div className="flex justify-center pl-2">
                            <div className="border-l-2 pl-8 border-blue-400" id='clean1'>
                                <ul className="text-lg leading-relaxed text-[#8fe1ff] list-disc" >
                                    <li>If you research roof cleaning on the Internet you will encounter claims, counter-claims and outright confusing and conflicting information among the different roof cleaning camps.</li>
                                </ul>
                                <br />
                                <ul className="text-lg leading-relaxed text-[#8fe1ff] list-disc" >
                                    <li>We have attempted to provide some clarification here regarding the four main roof cleaning methods most widely available to consumers.</li>
                                </ul>
                                <br />
                                <ul className="text-lg leading-relaxed text-[#8fe1ff] list-disc" >
                                    <li>We think that after reading this you will have a greater understanding of roof cleaning methods in general which will assist you in determining the best roof cleaning method for you.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* F&C Section */}
                <div className="container px- pb-12 lg:mt-12 mx-auto">
                    {/* F&C title */}
                    <div className=""  id="topreveal">
                        <h2 className="text-primary-focus text-2xl title-font font-bold text-center mt-6 lg:-mt-6 ">
                            Why We're Different!
                        </h2>
                        <div className="flex flex-col items-center text-center justify-center">
                            <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 " />
                        </div>
                    </div>
                    {/* features and competition */}
                    <div className="lg:flex ">
                        {/* features list */}
                        <div className="basis-1 lg:basis-1/2 mb-10 lg:items-start items-center rounded-md  border-gray-900 border-white mr-1 xl:mr-4">
                            {/* F&C TITLE */}
                            <div id="topreveal">
                                <h2 className="text-orange-400 text-xl title-font font-bold text-center mt-6">
                                    Your Benefits
                                </h2>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <div className="w-36 h-1 bg-orange-400 rounded mt-2 mb-8 " />
                                </div>
                            </div>
                            {/* 4 container */}
                            <div className="grid justify-center lg:pt-6 lg:text-left text-center">
                                {/* eco-friendly */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 border-[#8fe1ff] rounded-md p-2 shadow-2xl shadow-slate-500 px-4 lg:h-[19rem] xl:h-64" id='card1'>
                                    <div className="flex-grow">
                            
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={ecoBubble} alt="eco friendly" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                Eco-Friendly
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                                    </div>
                                    <p className="leading-relaxed text-green-200 box1">
                                        Roof Shampoo is the green, eco-friendly roof cleaning solution for asphalt and fiberglass shingles. Roof Shampoo does NOT contain dangerous chlorine bleach or phosphates. The Roof Shampoo roof cleaning method uses safe, effective, eco-friendly roof cleaning products to clean those ugly roof stains and will not harm any landscaping around your home.
                                    </p>
                                    </div>
                                </div>
                                {/* stain free */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 border-[#8fe1ff] rounded-md p-2 shadow-xl shadow-slate-500 px-4 lg:h-[17rem] xl:h-[14rem]" id='card2'>
                                    <div className="flex-grow">
                            
                                        <div className="flex flex-row justify-center lg:justify-start h-12">
                                            <img src={stainBubble} alt="eco friendly" className="w-12 h-12" />
                                            <span className="align-center">
                                                <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                    Stain Free
                                                </h2>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center text-center lg:items-start justify-center">
                                            <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                        </div>
                                        <p className="leading-relaxed text-green-200">
                                            When Roof Shampoo roof cleaning technicians leave your house, your algae stained roof will be STAIN FREE. No waiting for rain, no wondering, and no worrying if the stains will really go away as with other roof cleaning methods. With Roof Shampoo you will able to see for yourself - instantly. Results are IMMEDIATE and Complete!
                                        </p>
                                    </div>
                                </div>
                                {/* non damaging */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 border-[#8fe1ff] rounded-md p-2 shadow-2xl shadow-slate-500 px-4 lg:h-[19rem] xl:h-64" id="card3">
                                    <div className="flex-grow">
                            
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={nondamagingBubble} alt="eco friendly" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                Non-Damaging
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                        <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200">
                                        The cleaner your roof, the healthier your roof!  Roof Shampoo professionals use state-of-the-art equipment that delivers a soft, gentle low pressure water wash. NEVER damaging high pressure and absolutely NO scrubbing or brushing. There is no need to prematurely re-roof. Your Southeast Solar Advisor will make your dirty roof look new again.  Go with the true GREEN, roof cleaning method for cleaning roof stains, Roof Shampoo.
                                    </p>
                                    </div>
                                </div>
                                {/* Gentle */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 border-[#8fe1ff] rounded-md p-2 shadow-xl shadow-slate-500 px-4 lg:h-[17rem] xl:h-[14rem]" id='card4'>
                                    <div className="flex-grow">
                            
                                        <div className="flex flex-row justify-center lg:justify-start h-12">
                                            <img src={gentleBubble} alt="eco friendly" className="w-12 h-12" />
                                            <span className="align-center">
                                                <h2 className="pl-2 text-primary-focus text-lg title-font font-medium mb-3 py-3">
                                                    Gentle Wash
                                                </h2>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                        </div>
                                        <p className="leading-relaxed text-green-200">
                                            The proprietary Roof Shampoo ultra-light low pressure aluminum sprinkler-disc rinse system was engineered specifically for use on asphalt and fiberglass shingles. The sprinkler-disc rinser delivers a gentle, soft water rinse completely safe for all roof surfaces. NEVER damaging high pressure and absolutely NO scrubbing or brushing!
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* competition list */}
                        <div className="basis-1 lg:basis-1/2 mb-10 lg:items-start items-center rounded-md  border-gray-900 border-white mr-1 xl:ml-4" >

                            {/* competition TITLE */}
                            <div className=""  id="topreveal">
                                <h2 className="text-orange-400 text-xl title-font font-bold text-center mt-6">
                                    The Four Cleaning Methods
                                </h2>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <div className="w-52 h-1 bg-orange-400 rounded mt-2 mb-8 " />
                                </div>
                            </div>
                            {/* 4 container */}
                            <div className="grid justify-center lg:pt-6 lg:text-left text-center">
                                {/* 1) Eco-Friendly, Low Pressure Roof Shampoo Roof Cleaning Method */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 rounded-md p-2 px-4 lg:h-[19rem] xl:h-64 border-primary-focus shadow-primary-focus shadow-lg" id='card5'>
                                    <div className="flex-grow">
                            
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={checkBubble} alt="eco friendly" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className=" pl-2 text-primary-focus text-lg title-font font-bold mb-3 py-3">
                                            #1 Roof Shampoo Method
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-5 md:mt-2 mb-4 " />
                                    </div>
                                    <p className="leading-relaxed text-green-200 box1">
                                    The NON-bleach, green, ECO-FRIENDLY, low pressure Roof Shampoo roof cleaning method uses a proprietary soap that is specially formulated and buffered to be safe on all asphalt and fiberglass shingles. It will not harm any landscaping around the home, yet is 100% effective at removing roof stains from algae. No damaging high pressure is ever used and absolutely NO scrubbing or brushing. The results are immediate and complete.
                                    </p>
                                    </div>
                                </div>
                                {/* 2) Bleach Roof Cleaning Method */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 rounded-md p-2 px-4 lg:h-[17rem] xl:h-[14rem] border-red-600 shadow-red-600 shadow-md" id='card6'>
                                    <div className="flex-grow">
                            
                                        <div className="flex flex-row justify-center lg:justify-start h-12">
                                            <img src={xBubble} alt="eco friendly" className="w-12 h-12" />
                                            <span className="align-center">
                                                <h2 className="pl-2 text-red-500 text-md md:text-lg title-font font-bold mb-3 py-3">
                                                2) Bleach Roof Cleaning Method
                                                </h2>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center text-center lg:items-start justify-center">
                                            <div className="w-48 h-1 bg-red-500 rounded mt-4 md:mt-2 mb-4" />
                                        </div>
                                        <p className="leading-relaxed text-green-200">
                                        If the Contractor DOES NOT tell you up front that they are NOT using bleach, then they are very likely using bleach. Many contractors who use bleach will use the term "Soft Wash". Or, if they tell you they are using sodium hypochlorite -- you should know that sodium hypochlorite is the chemical name for bleach.
                                        </p>
                                    </div>
                                </div>
                                {/* 3) 'Splash and Dash' Method */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 rounded-md p-2 px-4 lg:h-[19rem] xl:h-64 border-red-600 shadow-red-600 shadow-md" id="card7">
                                    <div className="flex-grow">
                            
                                    <div className="flex flex-row justify-center lg:justify-start h-12">
                                        <img src={xBubble} alt="eco friendly" className="w-12 h-12" />
                                        <span className="align-center">
                                            <h2 className="pl-2 text-red-500 text-md md:text-lg title-font font-bold mb-3 py-3">
                                            3) 'Splash and Dash' Method
                                            </h2>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                        <div className="w-48 h-1 bg-red-500 rounded mt-4 md:mt-2 mb-4" />
                                    </div>
                                    <p className="leading-relaxed text-green-200 text-md">
                                    Some roof cleaning contractors will spray a chemical on your roof and tell you to wait for weeks or months to see the results. Products which do not require rinsing, but depend on the rain to wash away roof stains often take repeated applications to achieve even marginal results. Some roof cleaning companies actually use this consumer grade product and charge you professional rates for it. We call them 'Splash and Dash' operators.
                                    </p>
                                    </div>
                                </div>
                                {/* 4) High Pressure Power Washing Method */}
                                <div className="mb-2 m-1 lg:items-start items-center border-2 rounded-md p-2 px-4 lg:h-[17rem] xl:h-[14rem] border-red-600 shadow-red-600 shadow-md" id='card8'>
                                    <div className="flex-grow">
                            
                                        <div className="flex flex-row justify-center lg:justify-start h-12">
                                            <img src={xBubble} alt="eco friendly" className="w-12 h-12" />
                                            <span className="align-center">
                                                <h2 className="pl-2 text-red-500 text-md md:text-lg title-font font-bold py-3">
                                                4) High Pressure Power Washing Method
                                                </h2>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-red-500 rounded mt-4 md:mt-2 mb-4" />
                                        </div>
                                        <p className="leading-relaxed text-green-200">
                                        Some otherroof cleaning contractors use high pressure power washing methods to attempt to remove roofs stains. They blast away on your roof blowing the protective granules off as they go. Not only is this method damaging to your shingles, it's also not an effective way to remove roof stains from algae.
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center md:my-4"><label for="roof-popup" className="w-2/3 btn modal-button hover:bg-[#8fe1ff] bg-orange-400 btn-active-secondary text-lg hover:text-black text-slate-800 bg white" id="quote-now">Get Your Free Quote Now</label></div>
                        {/* Testimonials */}
                        <div class="text-gray-600 body-font pt-8">
                            <div class="container px-4 mb-6 mx-auto lg:items-start items-center rounded-md">
                                <div id="testtitle">
                                    <h2 className="text-primary-focus text-lg title-font font-medium text-center mt-6 lg:-mt-6">
                                    Roof Shampoo Customer Reviews
                                    </h2>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 " />
                                    </div>
                                </div>
                                <div class="flex flex-wrap lg:flex-nowrap lg:gap-x-4">
                                    
                                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 mb-10 lg:items-start items-center border-b-2 rounded-md p-2 shadow-lg shadow-slate-500 px-4">
                                        <div class="h-full text-center grid content-center" id="test1">
                                        
                                            <p class="leading-relaxed text-green-200 " >"I just want to say again how happy and pleased both my wife and I were with the Roof Shampoo service provided to us. Not only was the service prompt and professional, but the knowledge base was exceptional. Not many people know, in many instances, that they don't really need a new roof, they just need to have that roof cleaned with the right mixtures for exceptional results. The before and after photos initially sold us, but the results we have experienced have been nothing short of astounding and I would highly recommend you to any and all homeowners looking to give their homes a face lift. Again, thank you and best of luck in the future."</p>
                                            <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4 justify-self-center"></span>
                                            <h2 class="text-green-200 font-medium title-font tracking-wider text-sm grid ">- The Vaughns</h2>
                                        
                                        </div>
                                    </div>
                                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 mb-10 lg:items-start items-center border-b-2 rounded-md p-2 shadow-lg shadow-slate-500 px-4">
                                        <div class="h-full text-center grid content-center" id="test2">
                                        
                                        <p class="leading-relaxed text-green-200">"For a couple of years now dark streaks have been staining the roof of my home and my detached garage. I was not happy at the prospect of replacing my roof, but the stains really made the roof look old and unsightly. We made an appointment to examine the roof and explained that what my roof needed was a "roof shampoo." Best of all, it does not damage the roof. The results were fantastic - it looks like a new roof! I appreciated the professionalism and courtesy that the team provided. I know I can always turn to Roof Shampoo to keep my roofs looking new."</p>
                                        <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4 justify-self-center"></span>
                                        <h2 class="text-green-200 font-medium title-font tracking-wider text-sm ">- Marian W.</h2>
                                        
                                        </div>
                                    </div>
                                    <div class="lg:w-1/3 lg:mb-0 p-4 lg:items-start items-center border-b-2 rounded-md p-2 shadow-lg shadow-slate-500 px-4" id="test3">
                                        <div class="h-full text-center grid content-center">
                                        
                                        <p class="leading-relaxed text-green-200" >"I wanted to thank you for a job well done !!!! Your roof cleaning crew was at my home yesterday on schedule and did a very thorough and professional job.  In the five years since I've owned my home, the roof has never looked as good as it does now.  It looks like a new roof.   You made the magic happen just when I needed it, and I am a very satisfied customer. I will be sure to recommend your company to anyone I know that needs their roof cleaned. After you called me over the weekend to schedule me for yesterday, three other roof cleaning companies called me. I'm glad that you were the first to call me... I could not imagine anyone doing a better job, and your price was right on budget.  Thank you again." </p>
                                        <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4 justify-self-center"></span>
                                        <h2 class="text-green-200 font-medium title-font tracking-wider text-sm">- Rich H.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                 
            </div>

            <div className=" pb-8 pt-8 px-4" style={{"background":"radial-gradient(circle at 50% 20%, #1e4600, #252c49)"}}>
                <div className="container mx-auto bg-black md:mb-10 p-4">
                    <PopupContact />
                </div>
            </div>

        
            <input type="checkbox" id="roof-popup" className="modal-toggle" />
            <label className="modal items-start lg:items-center pt-4 md:pt-8 " for="roof-popup">
                <label className="modal-box w-11/12 max-w-5xl pt-4 max-h-screen" for="">                  
                    <PopupContact />
                </label>
            </label>
            
        </section>
    )
}