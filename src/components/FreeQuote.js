import { Link } from "react-router-dom"

export default function FreeQuote () {
    return(
      <div className="flex justify-center mb-8 mx-auto px-1 max-w-[915px]">
      <div class="card lg:card-side border-2 w-full xl:w-full px-0.5 md:px-6 md:mx-6 lg:mx-0">
        <div class="card-body">
          <h2 class="card-title text-white">Free estimate</h2> 
          <div className="grid lg:grid-cols-3">
            <p className="text-white lg:col-span-2">There are 4 factors that may affect your current solar maintenance needs. <br className="lg:hidden"/>Click <span className="lg:hidden">below</span> to get your free estimate on your system.</p>
            <Link to="/estimate">
              <button class="btn btn-primary hidden lg:inline-flex">Get Free Quote</button>
            </Link>
          </div>
          <Link to="/estimate">
            <div class="card-actions lg:hidden">
              <button class="btn btn-primary">Get Free Quote</button>
            </div>
          </Link>
        </div>
      </div>
      </div>

    )
}