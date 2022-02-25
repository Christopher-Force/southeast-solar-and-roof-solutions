import MaterialIcon from 'material-icons-react';

export default function Banner () {
    return(
        <div className="alert bg-gray-800 rounded-none shadow-lg drop-shadow-lg flex flex-col relative z-20">
            <div className="-mb-1">
                {/* Banner text */}
                <div className="grid grid-cols-4 lg:grid-cols-3 -mb-1 justify-items-center mx-auto ">
                    {/* office */}
                    <span className="col-span-2 lg:col-span-1 hidden md:inline-flex">                              
                        <span className="mr-2">
                            <MaterialIcon icon="support_agent" color="#FAFAFA" />
                        </span>
                        <span className="text-white underline-offset-4">
                            <a href="tel:800-240-4055" >OFFICE: <u>(800) 240-4055</u></a>
                        </span>
                    </span>
                    {/* cell */}
                    <span className="col-span-4 lg:col-span-1 md:col-span-2 inline-flex">
                    <span className="mr-1 -ml-3 lg:ml-0">
                            <MaterialIcon icon="phone_iphone" color="#FAFAFA" />
                        </span>
                        <span className="text-white underline-offset-4">

                        <a href="tel:727-423-1716">CELL: <u>(727) 423-1716</u></a>
                        </span>
                    </span>
                    {/* email */}
                    <span className="col-span-4 lg:col-span-1 row-start-2 lg:row-start-1 lg:col-start-3 inline-flex">
                    <span className=" mr-2">
                            <MaterialIcon icon="mail_outline" color="#FAFAFA" />
                        </span>
                        <span className="text-white underline-offset-4">
                        <a href="mailto:Southeastsolarsolutions@gmail.com"><u>Southeastsolarsolutions@gmail.com</u></a>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

<span class="material-icons">

</span>