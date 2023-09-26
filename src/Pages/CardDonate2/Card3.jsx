import React from 'react';
import swal from 'sweetalert';
import { savaData } from '../../utility/utility';

const Card3 = ({phone}) => {
    const { id, card_title, card_description, bg_color, text_color, image, Category_description, category_price, } = phone || {}

    const handleAddToDonation= () =>{
        const addeddonationArray =[];
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (!donationItem){
            addeddonationArray.push(phone)
            localStorage.setItem('donation',JSON.stringify(addeddonationArray))
            swal("Good job!", "Donation Added Succesfully!", "success");
        }
        else{
            const isExits = donationItem.find(phone=>phone.id ==id)

            if(!isExits){

                addeddonationArray.push(...donationItem, phone)
                localStorage.setItem('donation', JSON.stringify(addeddonationArray))
                swal("Good job!", "Donation Added Succesfully!", "success");

            }
            else{
                swal("Error!", "Already Added !", "error");
            }



        }
    }

    // const handleAddToDonation = () =>{

    //     swal("Good job!", "Donation Added Succesfully!", "success");

    //     savaData(phone)
    //     console.log("hello")

    // }

    return (
        <div >
            <div className="relative flex w-full h-[600px] flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md bg-black bottom-0 opacity-70 ">
                <div className="relative h-[600px]  m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700  ">
                    <img className='w-full h-full rounded-xl ' src={image} />
                    <div className='absolute bottom-10 left-10'>
                        <button onClick={handleAddToDonation}
                        style={{
                            background :text_color
                            
                        }}
                         className="btn  text-white rounded-md w-[180px] p-3 pb-4 text-xl text-center font-bold">Donate ${category_price}.00</button>
                    </div>
                </div>
               

            </div>

            <div className="p-6 border-5 border-green-400">
                <h4 className="block font-sans text-5xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {card_description}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">{Category_description}

                </p>
            </div>
        </div>
    );
};

export default Card3;