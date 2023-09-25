import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({phone}) => {
    const { id, card_title, card_description, bg_color, text_color, image } = phone || {}


    return (
        <div>

            <Link to={`/phones/${id}`}>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={image} /></figure>
                    <div className="card-body pl-5 pt-5">
                        <h2 className="card-title bg-slate-400 w-[100px] text-center font-bold text-lg rounded-lg pb-1 mb-2">{card_title}</h2>
                        <p className="text-xl pb-5">{card_description}</p>

                    </div>
                </div>
            </Link>
            
                
        
        </div>
    );
};

export default DonationCard;