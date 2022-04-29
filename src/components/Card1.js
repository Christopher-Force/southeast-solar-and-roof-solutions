import washMe from "../assets/img/washMe.jpg";
import { Link } from "react-router-dom"

export default function Card4 () {
    return(
        <div className="flex relative sm:p-1 w-full grid justify-items-center pl-1" id="card">
            <div className="border-2 rounded-lg border-gray-200 border-opacity-50 p-2  bg-black h-full grid justify-items-center mr-1">
                {/* IMAGE 1 */}
                <div className="grid justify-items-center mt-2">
                    <Link to="/cleaning">
                        <div className="w-32 md:w-64 md:h-64 sm:mb-0 mb-7 md:mb-4 bg-black flex-shrink-0 justify-items-center grid ">
                            <img src={washMe} alt="Wash me" className="rounded-lg hover:motion-safe:animate-pulse"/>
                        </div>
                    </Link>
                </div>
                {/* encloses text */}
                <div className="relative flex-grow grid justify-items-center mb-1 ">
                    {/* MX-2 ALLOWS FOR LINE SPREADING */}
                    <h2 className="sm:mx-2 mx-3 md:mx-0 text-white text-lg title-font font-medium mb-2 text-center">Solar Panel Cleaning</h2>
                    <p className="leading-relaxed text-white text-center">Our focus is residential and commericial solar panel cleanings!</p>
                    {/* LEARN MORE LINK, DIV MADE TO ALIGN TO BOTTOM OF CONTAINER */}
                    <div className="">
                        {/* Learn More Button */}
                        {/* <Link> */}
                            <Link to="/cleaning" className="mt-3 text-lime-400 inline-flex items-center hover:animate-pulse">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

