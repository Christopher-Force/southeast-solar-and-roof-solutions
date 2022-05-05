import certificate from "../assets/img/certificate.png"

export default function AnnualGutters () {
    return (
        <section class="text-green-200 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="contract" class="hidden md:flex md:w-1/2 w-2/3 lg:h-auto h-full object-cover object-center rounded" src={certificate} />
                    <div className="flex justify-center md:hidden">
                        <img alt="contract" class="lg:w-1/2 w-2/3 lg:h-auto h-full object-cover object-center rounded" src={certificate} />
                    </div>
                    <div class="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-primary-focus tracking-widest">Discounted Plans</h2>
                        <h1 class="text-primary-focus text-3xl title-font font-medium mb-1">Annual Contracts Available</h1>
                        <p class="leading-relaxed">Annual contracts are available for discounted gutter cleaning! Our services are also offered at regular price on a typical estimate, but our clients love our professional work so much, they normally choose us for our services. Contact us by telephone or email below for a detailed estimate!</p>
                    </div>
                </div>
            </div>
        </section>                
    )
}