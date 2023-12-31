import React from 'react';

const FavoritesCard = ({ phone }) => {
    const { id, card_title, card_description, bg_color, text_color, image, Category_description, category_price, btn_color } = phone || {}
    return (
        <div className='m-1 md:m-1 lg:m-0'>

            <div style={{
                background: bg_color
            }}
                className="card card-side flex  bg-base-100 shadow-xl  lg:h-52 md:mx-24 lg:mx-0 rounded-xl">
                <div className='w-[50%] lg:h-52'>
                    <figure><img className='border-5 w-full h-40 md:h-52 lg:h-52 rounded-s-xl' src={image} /></figure>

                </div>

                <div className="card-body pl-5 pt-6 w-[50%]">
                    <h2 style={{
                        color: text_color,
                        background: btn_color
                    }}
                        className="card-title text-sm md:text-lg lg:text-lg font-bold w-[90px] md:w-[100px] lg:w-[100px] text-center p-1 lg:pb-2 rounded-lg">{card_title}</h2>
                    <p
                        className='text-base md:text-xl lg:text-2xl mt-2 font-semibold'>{card_description}</p>

                    <p style={{
                        color: text_color
                    }}
                        className='text-sm md:text-xl lg:text-xl font-semibold my-2'>${category_price}.00</p>
                    <div className="card-actions justify-end ">
                        <button
                            style={{

                                background: text_color
                            }}
                            className="btn btn-primary text-xs md:text-base lg:text-sm font-semibold text-white rounded-lg lg:pb-3 lg:pt-2 lg:px-2 p-2">View Details</button>
                    </div>
                </div>
            </div>

        </div>













    );
};

export default FavoritesCard;