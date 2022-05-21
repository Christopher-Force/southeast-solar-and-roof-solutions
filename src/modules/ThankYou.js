import thankYou from "../assets/img/thankyou.png"

export default function ThankYou () {
    return (
        <div  className="bg-slate-900">
            <h2 className="text-orange-400 lg:text-3xl title-font font-bold text-center mt-6 overflow-x-hidden mx-auto">
                Thank You! An associate will contact you within 24 hours.
            </h2>
            <div className="flex flex-col items-center text-center justify-center ">
                <div className="w-2/5 lg:w-2/5 h-1 bg-orange-400 rounded mb-4" />
            </div>
            <h2 className="text-orange-400 lg:text-3xl title-font font-bold text-center mt-2 mb-4 overflow-x-hidden mx-auto">
                Click on the picture below to be directed to the main website.
            </h2>
            
            <div className="flex justify-center"><a href="https://www.southeastsolarsolutions.com"><img src={thankYou} alt="thank you" className="max-h-[40rem] xl:max-h-[48rem] flex justify-center" /></a></div>
        </div>
    )
}