import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Sheared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { productName, price } = booking;
    console.log(booking);
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mt-10 mb-5">Payment for <span className=' font-bold text-4xl '>{productName}</span></h3>
            <p className="text-xl">Please pay : <span className='text-green-400 tst-3xl font-bold'>${price}</span></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;