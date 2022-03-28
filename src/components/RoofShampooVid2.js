import RoofShampoo2 from "../assets/video/roofShampoo2.mp4"

export default function RoofShampooVid2 () {
    return(
        <div className="relative bg-black z-9 pb-8 pt-4 w-full h-full" id="video2">
                <div className="md:mx-20 grid justify-items-center">
                    <video className="max-w-6xl max-h-6xl" style={{objectFit: "fill", width: "100%"}} autoPlay controls muted playsInline poster="../assets/img/Logo dark.png">
                        <source id="myvideo" src={RoofShampoo2} type="video/mp4" />
                    </video>
                </div>
                <span></span>
        </div>
    )
}