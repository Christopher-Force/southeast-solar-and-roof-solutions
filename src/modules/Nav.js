import logo from "../assets/img/Logo dark.png"
import { Link } from "react-router-dom"

export default function Nav () {
    return(
      <div className="bg-green-900 pb-1 relative z-30 ">
        <div className="navbar shadow-lg bg-black text-neutral-content rounded-none drop-shadow-lg">
          <div className="flex-1">
            <Link to="/">
              <img src={logo} alt="solar logo" width="225px" height="96px" className="hover:motion-safe:animate-pulse" />
            </Link>
            <Link to="/">
              <span className="hidden sm:inline-flex mt-2">
                <span className="absolute hover:animate-ping">
                  <span class="material-icons " style={{fontSize: '24px'}}>
                    arrow_back
                  </span>
                
                </span>
                <span class="relative -z-10 material-icons " style={{fontSize: '24px'}}>
                  arrow_back
                </span>
              </span>
            </Link>
          </div> 
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              {/* <Link> */}
              <div className="btn btn-ghost btn-sm rounded-btn">
                  <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                    apps
                  </span>
                  <span className="pl-2">
                    <Link to="/cleaning">Solar Panel Cleaning</Link>
                  </span>
                </div>
              {/* <Link> */}
                <div className="btn btn-ghost btn-sm rounded-btn">
                  <span class="material-icons " style={{fontSize: '24px'}}>
                    roofing
                  </span>
                
                  <span className="pl-2">
                    <Link to="/RoofShampoo">Roof Shampoo</Link>
                  </span>
                </div>
              {/* <Link> */}
              <div className="btn btn-ghost btn-sm rounded-btn">
                
                <span class="material-icons " style={{fontSize: '24px'}}>
                  calendar_view_day
                  </span>
                  <span className="pl-2">
                    <Link to="/gutters">Gutter Cleaning</Link>
                  </span>
                </div>
              {/* </Link> */}
              <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" className="btn btn-ghost btn-sm rounded-btn">
                <span class="material-icons " style={{fontSize: '24px'}}>
                  wb_sunny
                </span>
                <span className="pl-2">
                      Skylights
                </span>
              </a>
              
            </div>
          </div>
          {/* dropdown  */}
          <div className="flex-none">
            <div className="dropdown dropdown-end max-h-96">
              <div tabIndex="0" className="m-1 btn bg-green-700 hover:bg-green-500 hover:motion-safe:animate-pulse">
                <span class="material-icons mt-2" style={{fontSize: "36px"}}>menu          
                </span>
              </div> 
              <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-black rounded-box w-72 md:w-96 pl-4">All Services
                  {/* Link 1 */}
                  <li>
                    <div className="btn btn-ghost btn-xs rounded-btn justify-start my-1">
                      <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                        apps
                      </span>
                      <span className="pl-2">
                        <Link to="/cleaning">Solar Panel Cleaning</Link>
                      </span>
                    </div>
                  </li>
                  {/* Link 2 */}
                  <li>
                    <div className="btn btn-ghost btn-xs rounded-btn justify-start my-1">
                      <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                        roofing
                      </span>
                      <span className="pl-2">
                        <Link to="/RoofShampoo">Roof Shampoo</Link>
                      </span>
                    </div>
                  </li>
                  {/* Link 3 */}
                  <li>
                    <div className="btn btn-ghost btn-xs rounded-btn justify-start my-1">
                      <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                        calendar_view_day
                      </span>
                      <span className="pl-2">
                        <Link to="/gutters">Gutter Cleaning</Link>
                      </span>
                    </div>
                  </li>
                  {/* Link 4 */}
                  <li>
                    <div className="btn btn-ghost btn-xs rounded-btn justify-start my-1">
                      <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                        wb_sunny
                      </span>
                      <span className="pl-2">
                        <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" >Skylights</a>
                      </span>
                    </div>
                  </li>
                  {/* Link 5 */}
                  <li>
                    <div className="btn btn-ghost btn-xs rounded-btn justify-start my-1">
                      <span class="material-icons ml-0.5 " style={{fontSize: '24px'}}>
                        360
                      </span>
                      <span className="pl-2">
                        <a href="https://fcskylights.net/solar-fans/solar-attic-fans/" target="_blank" rel="noreferrer noopener">Solar Attic Fans</a>
                      </span>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
}