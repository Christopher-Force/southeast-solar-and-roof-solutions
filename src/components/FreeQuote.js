import { Link } from "react-router-dom"

export default function FreeQuote () {
    return(
      <div className="flex justify-center mb-8 mx-auto px-1 max-w-[915px] mx-auto mt-4">
        <div class="card lg:card-side border-2 w-full px-0.5 md:px-6 md:mx-6 lg:mx-0">
          <div class="card-body">
            <h2 class="card-title text-white pb-2 lg:text-left text-center">No Cost Inquiry!</h2> 
            <div className="grid lg:grid-cols-3">
              <p className="text-white lg:col-span-2 pr-8 text-cent">We assess four elements that might influence the cost of your present solar panel maintenance requirements.<br className=""/><br />Click <span className="lg:hidden">below</span> to get your free estimate for your system!</p>
              <Link to="/estimate">
                <div className="grid">
                  <button class="btn btn-primary hidden lg:inline-flex">Get Free Quote</button>
                </div>
              </Link>
            </div>
            <Link to="/estimate">
              <div class="grid card-actions lg:hidden">
                <button class="btn btn-primary bg-green-700 border-green-800 hover:bg-green-400 hover:border-green-600">Get Free Quote</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
}