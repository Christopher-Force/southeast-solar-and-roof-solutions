import logo from "../assets/img/Logo dark.png"
import MaterialIcon from 'material-icons-react';
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
                <span className="hidden sm:inline-flex">
                  <span className="absolute hover:animate-ping">
                    <MaterialIcon icon="arrow_back" color="#FAFAFA" size="small"  />
                  </span>
                  <span className="relative -z-10">
                    <MaterialIcon icon="arrow_back" color="#FAFAFA" size="small"  />
                  </span>
                </span>
              </Link>
            </div> 
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              {/* <Link> */}
                <div className="btn btn-ghost btn-sm rounded-btn">
                <span className="">
                  <MaterialIcon icon="roofing" color="#FAFAFA" />
                </span>
                  <span className="pl-2">
                    <Link to="/RoofShampoo">Roof Shampoo</Link>
                  </span>
                </div>
              {/* </Link> */}
              <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" className="btn btn-ghost btn-sm rounded-btn">
              <MaterialIcon icon="wb_sunny" color="#FAFAFA" />
                <span className="pl-2">
                      Skylights
                </span>
              </a>
              <a href="https://fcskylights.net/solar-fans/solar-attic-fans/" target="_blank" rel="noreferrer noopener" className="btn btn-ghost btn-sm rounded-btn">
              <MaterialIcon icon="360" color="#FAFAFA" />
                <span className="pl-2">
                      Solar Attic Fans
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
              <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-black rounded-box w-72 md:w-96">
                <li>
                  <ul>
                    <li>

                    </li>
                  </ul>
                  <ul> All Services
                    <li>
                      <span>
                        <MaterialIcon icon="roofing" color="#FAFAFA" />
                        <span className="pl-2">
                          <Link to="/RoofShampoo">Roof Shampoo</Link>
                        </span>
                      </span>
                    </li>
                    <li>
                      <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener">
                        <MaterialIcon icon="wb_sunny" color="#FAFAFA" />
                        <span className="pl-2">
                          Tubular/Traditional Skylights
                        </span>
                      </a>
                    </li>
                    <li>
                      <span>
                        <MaterialIcon icon="360" color="#FAFAFA" />
                        <a href="https://fcskylights.net/solar-fans/solar-attic-fans/" target="_blank" rel="noreferrer noopener" className="pl-2">
                          Solar Attic Fans
                        </a>
                      </span>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}