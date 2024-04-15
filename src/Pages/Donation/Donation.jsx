import React, { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if (donationItem) {
            setDonation(donationItem);
        }
        else {
            setNoFound("No Data Found");
        }
    }, []);
    console.log(donation);
    const handleRemove = () => {
        localStorage.clear()
        setDonation([])
        setNoFound('No Data Found');
    }
    return (
        <div>
            {noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound} </p>
            ) : (
                <div >
                    {donation.length > 0 && (
                        <div>
                            <button
                                onClick={handleRemove} className="lg:px-5 mb-6 bg-[#009444] mt-4 p-3 lg:p-3 rounded-xl text-white font-bold text-xs  md:text-base lg:text-xl lg:pb-4 text-center block mx-auto">
                                Deleted All donation
                            </button>
                            {/* <h1>Total Price :{totalPrice}</h1> */}
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 ">
                        {
                            isShow ? donation.map((phone) => (
                                <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                            ))
                                : donation.slice(0, 4).map((phone) => (
                                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                                ))
                        }
                    </div>
                    {donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 block mx-auto bg-[#009444] mt-5 p-1 lg:p-3 rounded-xl text-white font-bold text-base md:text-lg lg:text-xl lg:pb-4 text-center">
                        {isShow ? 'See Less' : "See All"}
                    </button>}
                </div>
            )}
        </div>
    );

};
export default Donation;



