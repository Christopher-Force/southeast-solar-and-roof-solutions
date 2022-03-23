import logoAnimated from "../assets/video/animatedLogo.mp4"

export default function Hero() {
    return(
        <div className="relative bg-black z-9 -mt-6 md:-mt-12 lg:-mt-20 -mb-0 md:-mb-2">
            <div className="">
                <div className="md:mx-20 grid justify-items-center">
                    <video className="max-w-6xl lg:-ml-10" style={{objectFit: "fill", width: "100%"}} autoPlay muted playsInline poster="../assets/img/Logo dark.png">
                        <source id="myvideo" src={logoAnimated} type="video/mp4" />
                    </video>
                </div>
                
            </div>
        </div>
    )
}