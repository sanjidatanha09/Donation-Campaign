import React from 'react';

const FavoritesCard = ({ phone }) => {
    const { id, card_title, card_description, bg_color, text_color, image, Category_description, category_price, btn_color } = phone || {}
    return (
        <div>

            <div style={{
                background: bg_color
            }}
                className="card card-side flex bg-base-100 shadow-xl h-52 border-5 border-green-400">
                <div className='w-[50%] h-52'>
                    <figure><img className='border-5 w-full h-52 border-green-400' src={image} /></figure>

                </div>

                <div className="card-body pl-5 pt-6 w-[50%]">
                    <h2 style={{
                        color: text_color,
                        background: btn_color
                    }}
                        className="card-title text-lg font-bold w-[100px] text-center pb-2 rounded-lg">{card_title}</h2>
                    <p
                        className='text-2xl font-semibold'>{card_description}</p>

                    <p style={{
                        color: text_color
                    }}
                        className='text-xl font-semibold my-2'>${category_price}.00</p>
                    <div className="card-actions justify-end ">
                        <button
                            style={{

                                background: text_color
                            }}
                            className="btn btn-primary text-sm font-semibold text-white rounded-lg pb-3 pt-2 px-2 ">View Details</button>
                    </div>
                </div>
            </div>

        </div>













    );
};

export default FavoritesCard;