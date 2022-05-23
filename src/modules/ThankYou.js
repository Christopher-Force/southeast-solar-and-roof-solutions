import thankYou from "../assets/img/thankyou.png"
import "./thankyou.css"

export default function ThankYou () {
    return (
        <div  className="bg-slate-900 py-6 lg:py-12">
            <h2 className="text-orange-400 lg:text-4xl title-font font-bold text-center overflow-x-hidden mx-auto">
                Thank You For Your Time!
            </h2>
            <h2 className="text-orange-400 lg:text-3xl title-font font-medium text-center mt-2 mb-4 overflow-x-hidden mx-auto">
            An associate will contact you within 24 hours.<br />Click on the picture below to be directed to the main website.
            </h2>
            
            <div className="flex justify-center no-bluring" ><a href="https://www.southeastsolarsolutions.com"><img src={thankYou} alt="thank you" className="max-h-[38rem] xl:max-h-[48rem] flex justify-center border-2" /></a></div>
        </div>
    )
}