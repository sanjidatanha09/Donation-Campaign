import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card3 from './Card3';

const CardDonate2 = () => {
    const [phone,setPhone] =useState([])
    

    const {id} = useParams()
    

    const phones = useLoaderData()
    

    useEffect(()=>{
        const findPhone = phones?.find((phone) => phone.id === id);

        setPhone(findPhone);

    }, [id, phones])

    return (
        <div>
            <Card3 phone={phone}>
                
            </Card3>
            
        </div>
    );
};

export default CardDonate2;