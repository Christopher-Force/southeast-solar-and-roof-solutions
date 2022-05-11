import card4 from "../assets/img/card4.png"
import { Link } from "react-router-dom"

export default function Card4 () {
    return(
        <div className="flex relative sm:p-1 w-full grid justify-items-center pl-1 mt-4" id="card4">
            <div className="border-2 rounded-lg border-gray-200 border-opacity-50 p-2 bg-black h-full grid justify-items-center mr-1">
                {/* IMAGE 2 */}
                <div className="grid justify-items-center -mb-2 md:mb-0">
                    <Link to="/gutters">
                        <div className="w-32 md:w-64 md:h-64 sm:mb-0 mb-7 md:mb-4 bg-black flex-shrink-0 justify-items-center grid mt-2">
                            <img src={card4} alt="Wash me" className="rounded-lg hover:motion-safe:animate-pulse"/>
                        </div>
                    </Link>
                    <div className="relative flex-grow grid justify-items-center mb-1 ">
                        <h2 className="sm:mx-2 mx-3 md:mx-0 text-white text-lg title-font font-medium mb-2 text-center">Professional Gutter Cleaning</h2>
                        <p className="leading-relaxed text-white text-center">Safely cleaning gutters from the ground up to 3 stories high!</p>
                        {/* learn more bottom */}
                        <Link to="/gutters">
                            <div className="mt-3 text-lime-400 inline-flex items-center self-end hover:animate-pulse">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}