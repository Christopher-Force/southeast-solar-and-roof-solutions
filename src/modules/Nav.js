import logo from "../assets/img/Logo dark.png"
// import RoofingIcon from '@mui/icons-material/Abc';
import MaterialIcon from 'material-icons-react';
import { Link } from "react-router-dom"

export default function Nav () {
    return(
      <div className="bg-green-900 pb-1 relative z-30">
        <div class="navbar shadow-lg bg-black text-neutral-content rounded-box drop-shadow-lg">
            <div class="flex-1">
            <Link to="/">
              <img src={logo} alt="solar logo" width="225px" height="96px" className="hover:motion-safe:animate-pulse" />
            </Link>
            </div>
          <div class="flex-none hidden px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
              {/* <Link> */}
                <div class="btn btn-ghost btn-sm rounded-btn">
                <span className="">
                  <MaterialIcon icon="roofing" color="#FAFAFA" />
                </span>
                  <span className="pl-2">
                    Roof Shampoo
                  </span>
                </div>
              {/* </Link> */}
              <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" class="btn btn-ghost btn-sm rounded-btn">
              <MaterialIcon icon="wb_sunny" color="#FAFAFA" />
                <span className="pl-2">
                      Skylights
                </span>
              </a>
              <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" class="btn btn-ghost btn-sm rounded-btn">
              <MaterialIcon icon="360" color="#FAFAFA" />
                <span className="pl-2">
                      Solar Attic Fans
                </span>
              </a>
              <div class="btn btn-ghost btn-sm rounded-btn">
              <MaterialIcon icon="water_drop" color="#FAFAFA" />
                <span className="pl-2">
                      Roof Leak Repair
                </span>
              </div>
            </div>
          </div>
          {/* dropdown  */}
          <div class="flex-none">
          <div class="dropdown dropdown-end ">
            <div tabindex="0" class="m-1 btn bg-green-700 hover:bg-green-500 hover:motion-safe:animate-pulse">All Services</div> 
              <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-black rounded-box w-96">
                <li>
                  <span>
                    <MaterialIcon icon="roofing" color="#FAFAFA" />
                    <span className="pl-2">
                      Roof Shampoo
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
                    <a href="https://fcskylights.net/" target="_blank" rel="noreferrer noopener" className="pl-2">
                      Solar Attic Fans
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <MaterialIcon icon="water_drop" color="#FAFAFA" />
                    <span className="pl-2">
                      Roof Leak Repair
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}