import 'animate.css';
import EstimateButton from "./EstimateButton";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function Hero2() {
    return (         
        <div className="flex relative text-gray-600 body-font bg-black z-10 -mt-0 lg:-mt-12 ">
            <div className="flex sm:px-5 py-2 justify-center mx-auto">
                <div className="-m-4 mb-2 mx-auto">
                    <div className="grid grid-cols-2">
                        <Card1 />
                        <Card2 />
                    </div>
                    <div className="grid grid-cols-2">
                        <Card3 />
                        <Card4 />
                    </div>
                    <div className="mt-6" id='bottombutton'>
                        <EstimateButton />
                    </div>
                </div>
            </div>
        </div>
    )
}