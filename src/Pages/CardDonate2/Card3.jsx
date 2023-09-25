import React from 'react';

const Card3 = ({phone}) => {
    const { id, card_title, card_description, bg_color, text_color, image, Category_description, category_price } = phone || {}

    const handleAddToDonation= () =>{
        const addeddonationArray =[];
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (!donationItem){
            addeddonationArray.push(phone)
            localStorage.setItem('donation',JSON.stringify(addeddonationArray))
            swa
        }
        else{
            const isExits = donationItem.find(phone=>phone.id ===id)

            if(!isExits){

                addeddonationArray.push(...donationItem, phone)
                localStorage.setItem('donation', JSON.stringify(addeddonationArray))
                alert("added");

            }
            else{
                
            }



        }
    }

    return (
        <div>
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative   m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className='w-full h-[700px]' src={image}/>
                    <div>
                        <button onClick={handleAddToDonation} className="btn bg-[#FF444A] text-white rounded-md w-[180px] p-3 text-2xl text-center font-bold">Donate ${category_price}</button>
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-5xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {card_description}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">{Category_description}
                        
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card3;