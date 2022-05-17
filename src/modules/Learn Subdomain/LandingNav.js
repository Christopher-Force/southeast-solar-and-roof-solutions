import logo from "../../assets/img/Logo dark.png"
import { Link } from "react-router-dom"

export default function LandingNav () {
    return(
      <div className="bg-green-900 pb-1 relative z-30 ">
        <div className="navbar shadow-lg bg-black text-neutral-content rounded-none drop-shadow-lg">
          <div className="flex-1">
            <Link to="/">
              <img src={logo} alt="solar logo" width="225px" height="96px" className="hover:motion-safe:animate-pulse" />
            </Link>
          </div> 
        </div>
      </div>
    )
}