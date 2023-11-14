import React from 'react';
import './Clients.css'
const Clients = () => {
    return (
        <div className='lg:ml-20 lg:mr-20 mt-10 pl-5 pr-5 rounded' style={{ "backgroundColor": "#fff6d9" }}>
            <main className="grids">
                <section className="conten item1">
                    <h1 className=''>We Have Many Products</h1>
                    {/* <p>By animating a few CSS paint & composite properties, we can create fun interactions on hover & focus</p> */}
                </section>

                <section className="cards item2">
                    <h2>Tesla</h2>
                </section>

                <section className="cards item3"></section>

                <section className="cards item4"></section>

                <section className="cards item5">
                    <h2>Ferari</h2>
                </section>

                <section className="cards item7"></section>

                <section className="cards item8">
                    <h2>Ford</h2>
                </section>

                <section className="cards item9"></section>

                <section className="cards item10"></section>

                <section className="cards item11">
                    <h2>add a :focus state too!</h2>
                </section>
            </main>
        </div>
    );
};

export default Clients;