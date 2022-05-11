import ContactBlocks from "../components/ContactBlocks";
import RoofShampooVid1 from "../components/RoofShampooVid1";
import RoofShampooVid2 from "../components/RoofShampooVid2";
import ecoBubble from "../assets/img/ecoBubble.png";
import stainBubble from "../assets/img/stainBubble.png";
import nondamagingBubble from "../assets/img/nondamagingBubble.png";
import gentleBubble from "../assets/img/gentleBubble.png";
import "../styles/roofshampoo.css";
import React, {useEffect} from "react";
import ScrollReveal from 'scrollreveal'



export default function RoofShampoo () {
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
            #card1,
            #card2,
            #card3,
            #card4,
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
            #test3,
            #test2,
            #test1
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
                            Get a Roof Shampoo!
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
                                    Roof Shampoo® is the green, eco-friendly roof cleaning solution for asphalt and fiberglass shingles. Roof Shampoo® does NOT contain dangerous chlorine bleach or phosphates. The Roof Shampoo® roof cleaning method uses safe, effective, eco-friendly roof cleaning products to clean those ugly roof stains and will not harm any landscaping around your home.
                                </p>
                                </div>
                            </div>
                            {/* stain free */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='card2'>
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
                                        When Roof Shampoo® roof cleaning technicians leave your house, your algae stained roof will be STAIN FREE. No waiting for rain, no wondering, and no worrying if the stains will really go away as with other roof cleaning methods. With Roof Shampoo® you will able to see for yourself - instantly. Results are IMMEDIATE and Complete!
                                    </p>
                                </div>
                            </div>
                            {/* non damaging */}
                            <div className="mb-10 lg:mr-1 lg:items-start items-center border-2 rounded-md p-2 shadow-2xl shadow-slate-500 px-4" id="card3">
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
                                    The cleaner your roof, the healthier your roof!  Roof Shampoo® professionals use state-of-the-art equipment that delivers a soft, gentle low pressure water wash. NEVER damaging high pressure and absolutely NO scrubbing or brushing. There is no need to prematurely re-roof. Your Roof Shampoo contractor will make your dirty roof look new again.  Go with the true GREEN, roof cleaning method for cleaning roof stains, Roof Shampoo®.
                                </p>
                                </div>
                            </div>
                            {/* Gentle */}
                            <div className="mb-10 lg:ml-1 lg:items-start items-center border-2 rounded-md p-2 shadow-xl shadow-slate-500 px-4" id='card4'>
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
                                        The proprietary Roof Shampoo® ultra-light low pressure aluminum sprinkler-disc rinse system was engineered specifically for use on asphalt and fiberglass shingles. The sprinkler-disc rinser delivers a gentle, soft water rinse completely safe for all roof surfaces. NEVER damaging high pressure and absolutely NO scrubbing or brushing!
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                        


                        {/* cleaning methods */}
                        <div className=" mb-10 lg:items-start items-center rounded-md  border-gray-900 border-2 border-white" >
                            <div className="p-2">
                                <RoofShampooVid2 />
                            </div>
                            <div className="flex-grow" >
                                {/* Cleaning title */}
                                <div >
                                    <div className="flex flex-col items-center text-center justify-center" id="cleaningtitle">
                                        <h2 className="text-primary-focus text-lg title-font font-medium mb-3 ">
                                            {/* span is inline icon */}
                                            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                                <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                                water_damage
                                                </span>
                                            </span>
                                            Cleaning Methods
                                        </h2>
                                        <div className="flex flex-col items-center text-center justify-center">
                                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 " />
                                    </div>
                                    </div>
                                    
                                    <div className="pl-2">
                                        <div className="border-l-2 pl-2 border-blue-400" id='clean1'>
                                            <p className="leading-relaxed text-green-200" >
                                                If you research roof cleaning on the Internet you will encounter claims, counter-claims and outright confusing and conflicting information among the different roof cleaning camps.
                                            </p>
                                            <br />
                                            <p className="leading-relaxed text-green-200" >
                                                We have attempted to provide some clarification here regarding the four main roof cleaning methods most widely available to consumers.
                                            </p>
                                            <br />
                                            <p className="leading-relaxed text-green-200" >
                                                We think that after reading this you will have a greater understanding of roof cleaning methods in general which will assist you in determining the best roof cleaning method for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                {/* Eco-Friendly Cleaning Method */}
                                <div className="border-2 m-1 border-primary-focus rounded-md p-4 shadow-primary-focus shadow-lg">
                                    <div className="flex flex-col items-center text-center justify-center " id='ecotitle'>
                                        <h2 className="text-primary-focus text-lg title-font font-medium mb-3" >
                                            {/* span is inline icon */}
                                            <span className=" w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                                <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                                thumb_up_alt
                                                </span>
                                            </span>
                                            1) Eco-Friendly, Low Pressure Roof Shampoo Roof Cleaning Method
                                    
                                        </h2>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4" />
                                        </div>
                                    </div>
                                    
                                    <p className="leading-relaxed text-green-200" id="eco1">
                                        The NON-bleach, green, ECO-FRIENDLY, low pressure Roof Shampoo® roof cleaning method uses a proprietary soap that is specially formulated and buffered to be safe on all asphalt and fiberglass shingles. It will not harm any landscaping around the home, yet is 100% effective at removing roof stains from algae. No damaging high pressure is ever used and absolutely NO scrubbing or brushing. The results are immediate and complete.
                                    </p>
                                    <br />
                                    
                                    {/* img */}
                                    <span></span>
                                    <br />
                                    <p className="leading-relaxed text-orange-400 border-orange-400 pl-2 border-l-2 pl-1" id='eco2'>
                                        FACT: Shingle Manufacturers are using Roof Shampoo® Contractors to provide warranty roof cleanings for their customers.
                                    </p>
                                    
                                    <br />
                                    <p className="leading-relaxed text-green-200" id='eco3'>
                                        Authorized Roof Shampoo® contractors use eco-friendly stain removing products and equipment that ensure ALL stains from algae are removed from your roof.  A spray-on leave-on product, or a system that claims to use no pressure simply does not use an efficient cleaning system and cannot COMPLETELY remove those ugly roof stains.  With the Roof Shampoo® roof cleaning system, there is no waiting, no wondering, and no worrying if the stains will really go away.  You will see for yourself that the algae stains are completely gone before your Roof Shampoo® contractor leaves your house.
                                    </p>
                                    <br />
                                    
                                    {/* img */}
                                    <span></span>
                                    <p className="leading-relaxed text-green-200" id='eco4'>
                                        If our process costs more than just splashing bleach on the roof costs, it is because skilled technicians using the NON-bleach Roof Shampoo® roof cleaning method take the time to actually get on your roof, inspect it, and do the job right using top quality, eco-safe products and state-of-the-art equipment which really clean your roof.  Roof Shampoo® contractors are professionals who make sure they clean every square inch of your roof without damaging your shingles or your landscaping.
                                    </p>
                                </div>
                                <br />

                                {/* BLEACH CLEANING METHOD */}
                                <div className="border-2 m-1 border-red-600 rounded-md p-4 shadow-red-600 shadow-md">
                                    <div className="flex flex-col items-center text-center justify-center" id='bleachtitle'>
                                        <h2 className="text-red-500 text-lg title-font font-medium mb-3" >
                                            {/* span is inline icon */}
                                            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                                <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                                priority_high
                                                </span>
                                            </span>
                                            2) Bleach Roof Cleaning Method
                                    
                                        </h2>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-red-500 rounded mt-2 mb-4" />
                                        </div>
                                    </div>
                                    
                                    <p className="leading-relaxed text-green-200" id='bleach1'>
                                        Consumer Reports® warns NOT to use the chlorine-bleach solution described by the Asphalt Roofing Manufacturers Association due to its damaging effects.  Consumer Reports® Senior Editor praised the Roof Shampoo® method after he had his own roof cleaned with Roof Shampoo®.
                                    </p>
                                    <br />
                                    <p className="leading-relaxed text-green-200" id='bleach2'>
                                        If the Contractor DOES NOT tell you up front that they are NOT using bleach, then they are very likely using bleach. Roof cleaning contractors who use bleach often don't advertise or tell you that they use bleach because they know homeowners don't want bleach used around their homes. Even when asked directly, some may still deny that they use bleach. Be insistent about your need to know. Here are some clues: If they tell you that they use no pressure and that they follow the shingle manufacturers (ARMA) recommendations, then they are using bleach.
                                    </p>
                                    <br />
                                    <p className="leading-relaxed text-green-200" id="bleach3">
                                        Many contractors who use bleach will use the term "Soft Wash". Or, if they tell you they are using sodium hypochlorite -- you should know that sodium hypochlorite is the chemical name for bleach. They may even tell you they use SH, which is short for sodium hypochlorite - bleach. Some even mix fragrance in with the bleach to mask the smell so you won't know it's bleach.
                                    </p>
                                    <br />
                                    <p className="leading-relaxed text-green-200" id='bleach4'>
                                        If you're still not sure, ask the following question just this way: "How will you protect my plants while cleaning my roof?" Any answer other than "We don't need to protect your plants because our product does not harm plants," indicates harmful chemicals are being used. If the answer is something like "We wet down your plants before, during, and after our treatment to protect them," you should suspect that bleach is being used. Other indicators that bleach is being used is the use of a runoff recovery system which attempts to suck up all the toxic runoff during the treatment into a containment vessel. Also, if you are told that your plants will be covered during the roof cleaning process or sprayed with a plant protectant, that is a clear sign that your plants are in danger!
                                    </p>
                                    <br />
                                    <p className="leading-relaxed text-green-200" id='bleach5'>
                                        Many roof cleaning contractors who use bleach will mix up their own homemade formulas. They mix high-strength chlorine bleach with an array of varied chemicals such as phosphates, dish and laundry detergents, assorted surfactants, and odor-masking scents to hide the smell of the main ingredient - BLEACH! These haphazard chemical concoctions call into question product reliability, stability, safety and consistency across the board.
                                    </p>
                                    <br />
                                    <p className="leading-relaxed text-green-200 border-l-2 pl-1" id='bleach6'>
                                        Chlorine bleach has an intense chemical odor.  The toxic fumes can drift a block away, exposing your neighbors as well.
                                    </p>
                                </div>
                                <br />

                                {/* SPLASH AND DASH METHOD */}
                                <div className="border-2 m-1 border-red-600 rounded-md p-4 shadow-red-600 shadow-md">
                                    <div className="flex flex-col items-center text-center justify-center" id='splashtitle'>
                                        <h2 className="text-red-500 text-lg title-font font-medium mb-3" >
                                            {/* span is inline icon */}
                                            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                                <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                                priority_high
                                                </span>
                                            </span>
                                            3) 'Splash and Dash' Method
                                    
                                        </h2>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-red-500 rounded mt-2 mb-4" />
                                        </div>
                                    </div>
                                    
                                    <p className="leading-relaxed text-green-200" id="splash1">
                                        Some roof cleaning contractors will spray a chemical on your roof and tell you to wait for weeks or months to see the results. Products which do not require rinsing, but depend on the rain to wash away roof stains often take repeated applications to achieve even marginal results. Some roof cleaning companies actually use this consumer grade product and charge you professional rates for it. We call them 'Splash and Dash' operators.
                                    </p>
                                </div>
                                <br />

                                {/* HIGH PRESSURE METHOD */}
                                <div className="border-2 m-1 border-red-600 rounded-md p-4 shadow-red-600 shadow-sm">
                                    <div className="flex flex-col items-center text-center justify-center" id='pressuretitle'>
                                        <h2 className="text-red-500 text-lg title-font font-medium mb-3" >
                                            {/* span is inline icon */}
                                            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black -mb-4 mr-2">
                                                <span class="material-icons ml- mt-2" style={{fontSize: '36px'}}>
                                                priority_high
                                                </span>
                                            </span>
                                            4) High Pressure Power Washing Method
                                    
                                        </h2>
                                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
                                            <div className="w-52 h-1 bg-red-500 rounded mt-2 mb-4" />
                                        </div>
                                    </div>
                                    
                                    <p className="leading-relaxed text-green-200" id='pressure1'>
                                        Some roof cleaning contractors use high pressure power washing methods to attempt to remove roofs stains. They blast away on your roof blowing the protective granules off as they go. Not only is this method damaging to your shingles, it's also not an effective way to remove roof stains from algae.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Testimonials */}
                <div class="text-gray-600 body-font">
                    <div class="container px-4 mb-6 mx-auto lg:items-start items-center rounded-md">
                        <div id="testtitle">
                            <h2 className="text-primary-focus text-lg title-font font-medium text-center mt-6 lg:-mt-6">
                            Roof Shampoo® Customer Reviews
                            </h2>
                            <div className="flex flex-col items-center text-center justify-center">
                                <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-8 " />
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap lg:gap-x-4">
                            
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 mb-10 lg:items-start items-center border-b-2 rounded-md p-2 shadow-lg shadow-slate-500 px-4">
                                <div class="h-full text-center grid content-center" id="test1">
                                
                                    <p class="leading-relaxed text-green-200 " >"I just want to say again how happy and pleased both my wife and I were with the Roof Shampoo® service provided to us. Not only was the service prompt and professional, but the knowledge base was exceptional. Not many people know, in many instances, that they don't really need a new roof, they just need to have that roof cleaned with the right mixtures for exceptional results. The before and after photos initially sold us, but the results we have experienced have been nothing short of astounding and I would highly recommend you to any and all homeowners looking to give their homes a face lift. Again, thank you and best of luck in the future."</p>
                                    <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4 justify-self-center"></span>
                                    <h2 class="text-green-200 font-medium title-font tracking-wider text-sm grid ">- The Vaughns</h2>
                                
                                </div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 mb-10 lg:items-start items-center border-b-2 rounded-md p-2 shadow-lg shadow-slate-500 px-4">
                                <div class="h-full text-center grid content-center" id="test2">
                                
                                <p class="leading-relaxed text-green-200">"For a couple of years now dark streaks have been staining the roof of my home and my detached garage. I was not happy at the prospect of replacing my roof, but the stains really made the roof look old and unsightly. Our local Roof Shampoo® contractor made an appointment to examine the roof and explained that what my roof needed was a "roof shampoo." Best of all, it does not damage the roof. The results were fantastic - it looks like a new roof! I appreciated the professionalism and courtesy that the contractor and his team provided. I know I can always turn to Roof Shampoo® to keep my roofs looking new."</p>
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
                <div className="pt-8">
                    <ContactBlocks />
                </div>
            </div>
        </section>
    )
}