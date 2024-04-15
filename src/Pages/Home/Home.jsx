import { useLoaderData } from "react-router-dom";
import Phones from "../../Components/Phones/Phones";
import { useState } from "react";

const Home = () => {
    const phones = useLoaderData()
    const [fullCampaignes, setFullCampaignes] = useState(phones);
    const handleSearch = (e) => {
        const search = document.getElementById("searchinput").value;
        console.log(search);
        const lowerCase = search.toLowerCase()
        e.preventDefault();
        const filtercampaignes = phones.filter(
            (campaign) => campaign.card_title.toLowerCase().includes(lowerCase)
        );

        setFullCampaignes(filtercampaignes);
        console.log()
    };

    return (
        <div>
            <div className="md:h-[60vh] lg:h-[60vh] ">
                <div class="flex  justify-center items-center flex-col md:h-[60vh] lg:h-[60vh] image-full shdow-xl bg-base-100 rounded-2xl ">
                    <div
                        class="w-full bg-[url('/Resources/bg_banner.png')] bg-cover bg-center rounded-2xl">
                        <div class="w-full h-[50vh] md:h-[60vh] lg:h-[60vh] text-center bg-white opacity-90 backdrop-brightness-100  rounded-2xl">
                            <div className="pt-[140px] md:pt-[200px] lg:pt-[200px] mb-[40px]">
                                <span class="text-xl md:text-2xl lg:text-5xl w-1/2 text-center font-bold">I Grow By Helping People In Need</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <input id='searchinput' type="text" placeholder="Search here" className="input input-bordered  md:w-[275px]  lg:w-[490px]  p-2 md:p-3 lg:p-3 rounded-s-xl" />
                                <input onClick={handleSearch} className=" md:w-[100px] lg:w-[120px] p-2 bg-[#FF444A] text-white lg:font-bold text-base md:text-2xl lg:text-2xl rounded-e-xl " type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Phones phones={fullCampaignes}></Phones>
        </div>
    );
};

export default Home;