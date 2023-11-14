import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = ({ user, refetch }) => {

    const [seller, setSeller] = useState([])
    const [allSellers, setAllSellers] = useState([])

    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/allsellers?role=Seller", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSellers(data))
    }, [])

    const handleMakeVerified = id => {
        fetch(`https://assignment-twelfth-server.vercel.app/dashboard/alluser/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Verified successful.')
                    refetch();
                }
            })
    }

    const handleDeleteSeller = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            fetch(`https://assignment-twelfth-server.vercel.app/allseller/${id}`, {
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
                        const remaining = seller.filter(odr => odr._id !== id);
                        setSeller(remaining);
                    }
                })
        }
    }

    return (

        <div className='pr-5 lg:pr-20 pl-5'>
            <div className="overflow-x-auto">
                <h2 className="text-3xl mt-10 mb-10">All Sellers</h2>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((allSeller, i) => <tr key={allSeller._id}>
                                <th>{i + 1}</th>
                                <td>{allSeller.name}</td>
                                <td>{allSeller.email}</td>
                                {
                                    allSeller.status ?
                                        <>
                                            <td ><img className='w-10' src="https://i.ibb.co/1qFSWxn/tik-removebg-preview.png" alt="" /></td>
                                        </>
                                        :
                                        <>
                                            <td><button onClick={() => handleMakeVerified(allSeller._id)} className='btn btn-xs btn-primary'>Make Verified</button></td>
                                        </>
                                }
                                <td><button onClick={() => handleDeleteSeller(allSeller._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;