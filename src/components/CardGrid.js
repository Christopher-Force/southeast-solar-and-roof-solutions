export default function CardGrid () {
    return(
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
                    LET US DO THE DIRTY WORK!!
                    </h2>
                    <div className="flex flex-col items-center lg:items-start text-center justify-center ">
                        <div className="w-52 h-1 bg-primary-focus rounded mt-2 mb-4 " />
                    </div>
                    <p className="leading-relaxed text-green-200 box1">
                        Not only do we return your solar panels to the cleanest and highest production standards, we also use equipment and solution that was exclusively designed for, and approved by all solar panel manufacturers.
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
                            Minimized Liability
                        </h2>
                        <div className="flex flex-col items-center text-center lg:items-start justify-center">
                            <div className="w-48 h-1 bg-primary-focus rounded mt-2 mb-4" />
                        </div>
                        <p className="leading-relaxed text-green-200">
                            When carrying out our gutter cleaning, we perform almost every operation from the ground. This removes the liability typically involved with traditional gutter cleaning methods.
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
                        Our powerful gear makes setting-up, cleaning, and breaking-down quick, easy, and simple for everyone. Additionally, our equipment provides us with internal storage for debris while cleaning, so there is no mess. 
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
                            Three Stories Of Reach - Powered By Us
                        </h2>
                        <div className="flex flex-col items-center lg:items-start text-center justify-center">
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
    )
}