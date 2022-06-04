import ContractForm from "../../components/Contract Subdomain/ContractForm";

export default function ContractHome () {
    return (
        <section>
            <div className=" flex justify-center pt-4">
                <div className="lg:w-2/3">
                    <ContractForm />
                </div>
            </div>
        </section>
    )
}