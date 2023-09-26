

const Banner = () => {
    return (
        <div className="h-[60vh] ">
            <div class="flex  justify-center items-center flex-col h-[60vh] image-full shdow-xl bg-base-100 rounded-2xl ">
                <div 
                    class="w-full bg-[url('https://placekitten.com/1400')] bg-cover bg-center rounded-2xl">
                    <div class="w-full h-[60vh] text-center backdrop-blur-xl backdrop-brightness-100  rounded-2xl">
                        <div className="pt-[200px] mb-[40px]">
                            <span class=" text-5xl w-1/2 text-center ">I Grow By Helping People In Need</span>
                        </div>

                        <div className="flex justify-center items-center">
                            <input type="text" placeholder="Search here" className="input input-bordered w-[490px] p-3 rounded-s-xl" />
                            <input className="w-[120px] p-2 bg-[#FF444A] text-white font-bold text-2xl rounded-e-xl " type="submit" value="Submit" />

                        </div>



                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;