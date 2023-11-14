import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Fire from "../../../assets/fire.PNG"
import smart from "../../../assets/logo1.svg"




const Navbar = () => {


    const [isHovered, setIsHovered] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (isHovered) {
            setIsModalVisible(true);
        } else {
            const timeoutId = setTimeout(() => {
                setIsModalVisible(false);
            }, 200);

            return () => clearTimeout(timeoutId);
        }
    }, [isHovered]);


    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }



    const menuItems = <React.Fragment>
        <li className='bg-none font-medium' style={{ background: "none" }}><Link to="/">Find Jobs</Link></li>
        <li className='bg-none font-medium'><Link to="">Referrals</Link></li>
        <li className='font-medium'><Link to="">Ai Resume Review</Link></li>
        <li className='font-medium'><Link to="">Resume Builder</Link></li>
        <li className='font-medium'><Link className='mr-0' to="">Premium <span className='ml-0'><img className='ml-0' width="20px" src={Fire} alt="" /></span></Link></li>
        {
            user?.uid ?
                <>
                    <li
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='font-medium lg:mr-12'
                    >

                        <button> Account</button>
                    </li>

                    {isModalVisible && (
                        <div className=" absolute top-16 right-8 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className='bg-white rounded-xl w-52 pb-4 pl=3'>
                                <li className='font-medium'><Link to="">Ai Resume Review</Link></li>
                                <li className='font-medium'><Link to="">Resume Builder</Link></li>
                                <li className='text-white mt-0 pt-1 border-none ml-3'><button onClick={handleLogOut} className='btn pt-2 w-44 pb-3 mt-0 btn-sm bg-[#1863E5] border-none'>Sign Out</button></li>
                            </div>

                        </div>
                    )}

                </>
                :
                <>
                    <li className='lg:ml-24 font-medium'><Link to="/login">Sign In</Link></li>

                    <li className='lg:mr-20'>
                        <Link className="inline-flex items-center justify-center  text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-10 mt-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{ }" to="/signup">
                            Sign Up
                        </Link>
                    </li >
                </>
        }
    </React.Fragment >


    return (



        <div className='w-full px-5 py-2'>
            <div className="lg:pl-20 lg:pr-20 navbar flex justify-between">
                <div className="navbar-start">
                    <Link className='flex' to="/">
                        <img width="100px" src={smart} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal bg-none p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown dropdown-left rounded">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={1} className="relative menu menu-compact dropdown-content mt-12 ml-12 p-2 shadow bg-base-100 rounded-box w-52 bg-none" style={{ left: "-203px" }}>
                        <li className='bg-none font-medium' style={{ background: "none" }}><Link to="/">Find Jobs</Link></li>
                        <li className='bg-none font-medium'><Link to="">Referrals</Link></li>
                        <li className='font-medium'><Link to="">Ai Resume Review</Link></li>
                        <li className='font-medium'><Link to="">Resume Builder</Link></li>
                        <li className='font-medium'><Link className='mr-0' to="">Premium <span className='ml-0'><img className='ml-0' width="20px" src={Fire} alt="" /></span></Link></li>
                        {
                            user?.uid ?
                                <>
                                    {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                                    <li><button onClick={handleLogOut}>Sign out</button></li>

                                </>
                                :
                                <>
                                    <li className='lg:ml-24 font-medium'><Link to="/login">Sign In</Link></li>
                                    <li className='text-white mt-0 pt-1 '><Link className='btn pt-1 w-48 pb-3 mt-0 btn-sm bg-[#1863E5]' to="/signup">Sign Up</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;