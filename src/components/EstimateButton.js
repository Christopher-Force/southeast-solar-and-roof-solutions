import { Link } from "react-router-dom"
import React from "react";

export default function EstimateButton () {

    return(
        <Link to="/estimate">
            <div className="relative z-50 grid align-center ">
                <button className="btn glass mx-auto bg-orange-700 text-gray-100">Click for Free Estimate</button>
            </div>
        </Link>
    )
}