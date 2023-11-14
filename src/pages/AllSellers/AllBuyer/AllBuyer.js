import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const [allBuyers, setAllBuyers] = useState([])
    const [buyer, setBuyer] = useState([])

    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/dashboard/allbuyers?role=Buyer", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllBuyers(data))
    }, [])

    const handleDeleteBuyer = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {

            fetch(`https://assignment-twelfth-server.vercel.app/dashboard/allbuyers/${id}`, {

                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = buyer.filter(odr => odr._id !== id);
                        setBuyer(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='pr-5 lg:pr-20 pl-5'>
                <h2 className="text-3xl mt-10 mb-10">All Buyers</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBuyers.map((allBuyer, i) => <tr key={allBuyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{allBuyer.name}</td>
                                    <td>{allBuyer.email}</td>
                                    <td><button onClick={() => handleDeleteBuyer(allBuyer._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;