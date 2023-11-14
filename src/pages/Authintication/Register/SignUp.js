import React from 'react';
import Candidate from "../../../assets/candidate.PNG"
import Referd from "../../../assets/refer.PNG"
import Navbar from '../../Sheared/Navbar/Navbar';
import Fotter from '../../Sheared/Footer/Fotter';
import { Link } from 'react-router-dom';

const SignUp = () => {




     return (
          <div>

               <div className='bg-gradient-to-l from-[#D6E8FC] via-[#EFF5FA] to-[#D6E8FC] lg:pb-32 pb-16'>
                    <Navbar className='bg-gradient-to-l from-[#D6E8FC] via-[#EFF5FA] to-[#D6E8FC] pb-10'></Navbar>
                    <div className='text-center lg:mt-32 mt-16'>
                         <h1 className=' lg:text-5xl text-4xl font-bold mb-4 '>Choose which type of account</h1>
                         <h1 className=' lg:text-5xl text-4xl font-bold text-[#1863E5] mb-4'>you want to create.</h1>
                         <p className='lg:ml-96 lg:mr-96 '>You can create a candidate account to request referrals to open roles at any of the hundreds of companies on Refer Me, or you can create a referrer account to refer people to open roles at your company. Select the type of account you want to create below.</p>
                    </div>

                    <div className='lg:flex lg:ml-48 ml-6 lg:mr-48 lg:mt-10 mt-16 '>

                         <Link to="/signup/candidate">
                              <div className='flex bg-[#FFFFFF] mr-6 rounded-xl  hover:scale-105 transition-transform duration-300 ease-in-out lg:mb-0 mb-12'>
                                   <div>
                                        <img className='lg:mt-6 mt-10 ml-3 h-20 lg:w-24  w-40 ' src={Candidate} alt="" />
                                   </div>
                                   <div className='lg:h-36 h-48  pl-4 lg:pr-8 pr-4'>
                                        <h1 className='text-xl font-semibold lg:mt-4 mb-6 mt-4'>Create a Candidate Account</h1>
                                        <p className=''>Looking for a job? Create a candidate account and start getting referrd to your dream companies</p>
                                   </div>
                              </div>
                         </Link>
                         <Link to='/signup/referrer'>

                              <div className='flex bg-[#FFFFFF] mr-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
                                   <div>
                                        <img className='lg:mt-6 mt-10 ml-3 h-20 lg:w-24 w-40' src={Referd} alt="" />
                                   </div>
                                   <div className='lg:h-36 h-48 pl-4 lg:pr-8 pr-8'>
                                        <h1 className='text-xl font-semibold lg:mt-4 mb-6 mt-4'>Create a Referrer Account</h1>
                                        <p className=''>Want to refer top talent to your company? Receive referral requests for various roles at your company.</p>
                                   </div>
                              </div>
                         </Link>

                    </div>

               </div>


               <Fotter></Fotter>
          </div>

     );
};

export default SignUp;