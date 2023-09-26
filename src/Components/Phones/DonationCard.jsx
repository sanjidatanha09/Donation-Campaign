import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({phone}) => {
    const { id, card_title, card_description, bg_color, text_color, image, btn_color } = phone || {}


    return (
        <div>

            <Link to={`/phones/${id}`}>
                <div className="card card-compact  bg-base-100  h-80 m-2 md:m-2 lg:m-0 shadow-xl">
                    <figure><img  className='w-full h-52' src={image} /></figure>
                    <div style={{
                        color: text_color,
                        background: bg_color
                    }}
                    className="card-body pl-5 pt-6">
                        <h2 style={{

                            background: btn_color
                        }}
                        className="card-title  w-[100px] text-center font-bold text-lg rounded-lg pb-1 mb-2">{card_title}</h2>
                        <p className="text-xl pb-5 font-semibold">{card_description}</p>

                    </div>
                </div>
            </Link>
            
                
        
        </div>
    );
};

export default DonationCard;