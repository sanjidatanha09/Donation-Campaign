import useGetphone from "../../Hook/useGetphone";
import DonationCard from "./donationCard";


const Phones = ({ phones }) => {
    const getDataHooks =useGetphone()
    console.log(getDataHooks)
    console.log(phones);

    return (
        <div className="py-10">
          

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
                {
                    phones?.map(phone => <DonationCard key={phone.id} phone={phone}></DonationCard>)

                }
            </div>

        </div>
    );
};

export default Phones;