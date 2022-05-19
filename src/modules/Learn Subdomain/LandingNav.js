import logo from "../../assets/img/Logo dark.png"

export default function LandingNav () {
    return(
      <div className="bg-green-900 pb-1 relative z-30">
        <div className="navbar shadow-lg bg-black text-neutral-content rounded-none drop-shadow-lg">
          <div className="flex-1">
              <img src={logo} alt="solar logo" width="225px" height="96px" className="w-3/5 md:w-1/5" />
          </div>
          <label for="roof-popup" className="btn modal-button hover:bg-[#8fe1ff] bg-slate-900 btn-active-secondary text-lg xl:text-2xl hover:text-black text-primary-focus bg white">Get Free Quote</label> 
        </div>
      </div>
    )
}