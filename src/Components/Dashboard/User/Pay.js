import React from 'react';
import { useParams } from 'react-router';

const Pay = () => {
    const {paymentId} = useParams()
    // const paymentId = useParams()
    // console.log(paymentId)
    // const [payOrder, setPayOrder] = useState([])

    // useEffect(() => {
    //     const url = `http://localhost:3800/orders/${paymentId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setPayOrder(data)
    //         })
    // }, [paymentId])


    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <h1>Payment Comming soon...{paymentId}</h1>
            </div>
            
        </div>
    );
};

export default Pay;