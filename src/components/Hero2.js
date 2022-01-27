import washMe from "../assets/img/washMe.jpg";
import stateFlorida from "../assets/video/stateFlorida.mp4"
import { Link } from "react-router-dom"

export default function Hero2() {
    return (
        <section className="flex relative text-gray-600 body-font bg-black z-20 -mt-0 lg:-mt-12">
            <div className="flex sm:px-5 py-2 justify-center mx-auto">
                <div className="-m-4 mb-2 mx-auto">
                    <div className="container flex">
                        {/* BEGIN FLEX ITEM 1 */}
                        <div className="flex relative sm:p-1 w-1/2 grid justify-items-center">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-2 flex-col bg-black h-full grid justify-items-center mr-1">
                                {/* IMAGE 1 */}
                                <div className="grid justify-items-center mt-2">
                                    <Link to="/cleaning">
                                        <div className="w-32 md:w-64 md:h-64 sm:mb-0 mb-7 md:mb-4 bg-black flex-shrink-0 justify-items-center grid ">
                                            <img src={washMe} alt="Wash me" className="rounded-lg"/>
                                        </div>
                                    </Link>
                                </div>
                                {/* encloses text */}
                            <div className="relative flex-grow grid justify-items-center mb-1 ">
                                {/* MX-2 ALLOWS FOR LINE SPREADING */}
                                <h2 className="sm:mx-2 mx-3 md:mx-0 text-white text-lg title-font font-medium mb-2 text-center">Solar Cleaning</h2>
                                <p className="leading-relaxed text-white text-center">We do solar panel cleanings for homeowners and business owners!</p>
                                {/* LEARN MORE LINK, DIV MADE TO ALIGN TO BOTTOM OF CONTAINER */}
                                <div className="">
                                    {/* Learn More Button */}
                                    {/* <Link> */}
                                        <Link to="/cleaning" className="mt-3 text-lime-400 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* BEGIN FLEX ITEM 2 */}

                    <div className="flex relative sm:p-1 w-1/2">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-2 flex-col bg-black h-full ml-1">
                                {/* IMAGE 2 */}
                            <div className="grid justify-items-center">
                                <Link to="/statewide">
                                    <div className="w-32 md:ml-4 md:w-72 md:h-64 mb-10 mt-4 md:mb-2 md:mt-3 bg-black flex-shrink-0 justify-items-center grid">
                                            <video loop className="max-w-6xl" style={{objectFit: "fill", width: "110%"}} autoPlay muted playsInline>
                                                <source id="myvideo" src={stateFlorida} type="video/mp4" />
                                            </video>
                                    </div>
                                </Link>
                                    <div className="relative flex-grow grid justify-items-center">
                                        <h2 className="text-white text-lg title-font font-medium mb-3 text-center">We're Statewide!</h2>
                                        <p className="leading-relaxed text-white text-center">We do solar panel cleanings for homeowners and business owners!</p>
                                        {/* learn more bottom */}
                                        <Link to="/statewide">
                                            <div className="mt-3 text-lime-400 inline-flex items-center self-end">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}