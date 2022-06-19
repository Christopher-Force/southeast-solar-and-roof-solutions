import ContractForm from "../../components/Contract Subdomain/ContractForm";


export default function ContractHome () {
    return (
        <section className="flex justify-center" >
            <div className="lg:w-2/3 bg-blue-400 flex justify-center">
                <div className="bg-black">
                    <div className="">
                        <ContractForm />
                    </div>
                </div>
            </div>
        </section>
    )
}