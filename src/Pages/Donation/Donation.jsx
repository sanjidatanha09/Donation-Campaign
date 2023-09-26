import React, { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";



const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    // const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'));


        if (donationItem) {
            setDonation(donationItem);

            // const total = donationItem.reduce((preValue, currentItem) => preValue + currentItem.category_price, 0)
            // console.log(total);
            // setTotalPrice(total)

        }
        else {
            setNofound("No Data Found");
        }

    }, []);
    console.log(donation);
    const handleRemove = () => {
        localStorage.clear()
        setDonation([])
        setNofound('No Data Found');
    }

    return (
        <div>
            {noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound} </p>
            ) : (
                <div >
                    {donation.length > 0 && (
                        <div>
                            <button
                                onClick={handleRemove} className="px-5 mb-6 bg-[#009444] mt-5 p-3 rounded-xl text-white font-bold text-xl pb-4 text-center block mx-auto">

                                Deleted All donation

                            </button>
                            {/* <h1>Total Price :{totalPrice}</h1> */}
                        </div>
                    )}



                    <div className="grid grid-cols-2 gap-5">
                        {


                            isShow ? donation.map((phone) => (
                                <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                            ))

                                : donation.slice(0, 4).map((phone) => (
                                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                                ))

                        }


                    </div>

                    {donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 block mx-auto bg-[#009444] mt-5 p-3 rounded-xl text-white font-bold text-xl pb-4 text-center">
                        {isShow ? 'See Less': "See All"}
                    </button>}


                </div>

            )}
        </div>

    );

};
export default Donation;



