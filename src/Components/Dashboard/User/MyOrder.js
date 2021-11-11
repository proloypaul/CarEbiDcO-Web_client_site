import React, { useEffect, useState } from 'react';
import useAuth from '../../../Context/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const [userOrder, setUserOrder] = useState([])

    useEffect(()=> {
        const url = `http://localhost:3800/orders/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setUserOrder(data)
        }) 
    }, [user.email])
    return (
        <div>
            <h1>My order section</h1>
            <h1>Your Total Order {userOrder.length}</h1>
        </div>
    );
};

export default MyOrder;