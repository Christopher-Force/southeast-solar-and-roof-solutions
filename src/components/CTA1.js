import React from "react";
import solarCleaner from "../assets/img/solarCleaner.png"
import { Link } from "react-router-dom"

function CTA1() {
    return (
        <div className="bg-black overflow-y-hidden">
            <div className="container">
                <div className="w-full flex justify-center">
                    <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-gray-700 to-gray-900 md:py-8 md:px-8 px-5 py-4 xl:p-12 xl:py-16">
                        <div>
                            <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                    <div>
                                        <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Certain factors may affect the pricing of your solar maintenance needs</h1>
                                    </div>
                                    <Link to="/estimate">
                                    <button aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-gray-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">Get your free quote</button>
                                    </Link>
                                </div>
                                <div className="md:w-1/3 w-2/3">
                                    <img src={solarCleaner} alt="solar cleaner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA1;
