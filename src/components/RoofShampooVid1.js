import RoofShampoo1 from "../assets/video/roofShampoo1.mp4"

export default function RoofShampooVid1 () {
    return(
        <div className="relative bg-black z-9 ">
                <div className="md:mx-20 grid justify-items-center">
                    <video className="max-w-6xl max-h-6xl" style={{objectFit: "fill", width: "100%"}} autoPlay controls playsInline poster="../assets/img/Logo dark.png">
                        <source id="myvideo" src={RoofShampoo1} type="video/mp4" />
                    </video>
                </div>
                <span></span>
        </div>
    )
}