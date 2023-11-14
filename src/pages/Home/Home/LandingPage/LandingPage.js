import React from 'react';
import Amazon from "../../../../assets/Amazon.jpeg"
import Microsoft from "../../../../assets/microsoft.png"
import Disney from "../../../../assets/disney.jpeg"
import Tesla from "../../../../assets/tesla.png"
import Mogan from "../../../../assets/morganstanley.png"

import Banner1 from "../../../../assets/comp1.png"
import Banner2 from "../../../../assets/comp2.png"
import Banner3 from "../../../../assets/comp3.png"
import Banner4 from "../../../../assets/comp4.png"


import SideImage from "../../../../assets/LeftSide.PNG"
import RightSideImage from "../../../../assets/rightSide.PNG"



import Seekerr from "../../../../assets/seek.PNG"


const LandingPage = () => {
     return (
          <div className='lg:mx-32'>
               <div className='lg:flex lg:mt-32'>
                    <div className='lg:w-1/2'>
                         <h1 className='text-[#1863E5] lg:text-6xl text-4xl font-bold mb-3 lg:text-left text-center'>Job referrals.</h1>
                         <h1 className='text-[#000000] lg:text-6xl text-4xl font-bold mb-3  lg:text-left text-center'>Your secret weapon</h1>
                         <h1 className='text-[#000000] lg:text-6xl text-4xl font-bold lg:mb-5 mb-3 lg:text-left text-center'>for job hunting.</h1>
                         <p className='text-black  lg:text-lg text-base  lg:mt-10  lg:text-left text-center'>Get referred into your dream job today.</p>
                         <div className='flex'>
                              <button className="btn lg:block hidden btn-active bg-[#1863E5] hover:bg-[#1863E5] hover:bg capitalize text-xl font-normal lg:h-[55px] px-8 lg:mt-10 border-none">Get referred to your Dream job</button>
                              <button className="btn lg:block hidden lg:mt-10 bg-white hover:bg-white border-[#1863E5] text-[#1863E5] lg:h-[55px] lg:ml-6 capitalize text-xl font-normal">View My Dashboard</button>
                         </div>
                    </div>


                    <div className='lg:w-1/2'>
                         <div className='flex justify-items-center bg-white lg:p-3 p-2 lg:mx-auto mx-4 drop-shadow-xl rounded-xl lg:mt-0 mt-4'>
                              <img className='lg:w-12 lg:h-12 w-8 h-8 lg:rounded-xl rounded-md' src={Amazon} alt="" />
                              <h1 className='lg:mt-3 mt-1 lg:text-xl text-base lg:ml-4 ml-2'>Someone at <strong>Amazon</strong> wants to refer you.</h1>
                         </div>

                         <div className='flex justify-items-center bg-white lg:p-3 p-2 lg:mx-auto mx-4 drop-shadow-xl rounded-xl mt-4'>
                              <img className='lg:w-12 lg:h-12 w-8 h-8 lg:rounded-xl rounded-md' src={Microsoft} alt="" />
                              <h1 className='lg:mt-3 mt-1 lg:text-xl text-base lg:ml-4 ml-2'>Someone at <strong>Amazon</strong> wants to refer you.</h1>
                         </div>

                         <div className='lg:block hidden'>
                              <div className='flex justify-items-center bg-white p-3 drop-shadow-xl rounded-xl lg:mt-4'>
                                   <img className='w-12 rounded-xl' src={Tesla} alt="" />
                                   <h1 className='mt-3 text-xl ml-4'>Someone at <strong>Tesla</strong> wants to refer you.</h1>
                              </div>

                              <div className='flex justify-items-center bg-white p-3 drop-shadow-xl rounded-xl lg:mt-4'>
                                   <img className='w-12 rounded-xl' src={Mogan} alt="" />
                                   <h1 className='mt-3 text-xl ml-4'>You've been referred into <strong>Morgan Stanley</strong>  </h1>
                              </div>

                              <div className='flex justify-items-center bg-white p-3 drop-shadow-xl rounded-xl lg:mt-4'>
                                   <img className='w-12 rounded-xl' src={Disney} alt="" />
                                   <h1 className='mt-3 text-xl ml-4'>Someone at <strong>Disney</strong> wants to refer you.  </h1>
                              </div>
                         </div>

                    </div>

                    <div className='lg:hidden flex flex-col justify-center justify-items-center text-center  lg-mt-0 mt-10 ' style={{ alignItems: "center" }}>
                         <button className="btn  btn-active  w-72 mb-5  bg-[#1863E5] hover:bg-[#1863E5] hover:bg capitalize text-base font-normal lg:h-[55px] lg:mt-10 border-none">Get referred to your Dream job</button>
                         <button className="btn  w-72  lg:mt-10 bg-white hover:bg-white border-[#1863E5] text-[#1863E5] lg:h-[55px] lg:ml-6 capitalize text-lg font-normal">View My Dashboard</button>
                    </div>
               </div>


               <div>
                    <p className='text-center lg:mt-20 mt-12 mb-10 lg:text-lg font-semibold text-gray-500'>Get referred by employees from</p>
                    <div className='flex justify-center'>
                         <div className='lg:flex'>
                              <img className='w-48 h-12 lg:mb-0 mb-6 ' src={Banner1} alt="" />
                              <img className='w-48 h-5' src={Banner2} alt="" />
                         </div>
                         <div className='lg:flex'>
                              <img className='w-48 h-12 lg:mb-0 mb-6' src={Banner3} alt="" />
                              <img className='w-48 h-8' src={Banner4} alt="" />
                         </div>
                    </div>
                    <div className='lg:flex hidden justify-center mt-8'>
                         <div className='lg:flex'>
                              <img className='w-48 h-12' src={Banner1} alt="" />
                              <img className='w-48 h-5' src={Banner2} alt="" />
                         </div>
                         <div className='lg:flex'>
                              <img className='w-48 h-12' src={Banner3} alt="" />
                              <img className='w-48 h-8' src={Banner4} alt="" />
                         </div>
                    </div>


                    <p className='text-center lg:mt-12 mt-12  lg:text-lg font-semibold text-gray-500'>Get referred to 1000+ companies across all industries</p>

               </div>


               <hr className='mt-16 mb-16' />

               <div>
                    <h1 className='text-center text-xl font-semibold text-orange-500'>The worlds #1 referral platform</h1>
                    <h1 className='text-6xl text-black font-bold text-center mb-20'>See our numbers in action</h1>
                    <div className='lg:flex lg:pb-28'>

                         <div className='bg-white rounded-xl p-5 lg:mr-8 mr-5 lg:ml-0 ml-6 lg:mb-0 mb-6'>
                              <div className='flex'>
                                   <img src={Seekerr} alt="" />
                                   <p className='text-base font-bold ml-2 mt-3'>Job seekers connected</p>

                              </div>
                              <h1 className='text-2xl font-bold mt-2 mb-3'>100,000+</h1>
                              <p className='text-gray-500'>We've connected over 100,000 job seekers with employees at their dream companies. Helping them land their dream role.</p>
                         </div>


                         <div className='bg-white rounded-xl p-5 lg:mr-8 mr-5 lg:ml-0 ml-6 lg:mb-0 mb-6'>
                              <div className='flex'>
                                   <img src={Seekerr} alt="" />
                                   <p className='text-base font-bold ml-2 mt-3'>Referrals requested</p>

                              </div>
                              <h1 className='text-2xl font-bold mt-2 mb-3'>300,000+</h1>
                              <p className='text-gray-500'>Our users have sent over 300,000 referral requests to various roles, across all industries, and across 1000+ companies..</p>
                         </div>
                         <div className='bg-white rounded-xl p-5 lg:mr-8 mr-5 lg:ml-0 ml-6'>
                              <div className='flex'>
                                   <img src={Seekerr} alt="" />
                                   <p className='text-base font-bold ml-2 mt-3'>Resume improvements</p>

                              </div>
                              <h1 className='text-2xl font-bold mt-2 mb-3'>15,000+</h1>
                              <p className='text-gray-500'>We've improved and created over 15,000 resumes with our AI resume feedback and resume builder tools.</p>
                         </div>


                    </div>
               </div>



               <div className='lg:mt-32 mt-10'>
                    <p className='text-center text-purple-500 font-semibold text-lg'>More than just referrals</p>
                    <div className='flex justify-center'>
                         <h1 className='text-center font-bold text-6xl lg:w-[700px]'>Resumes that convert with <span>ReferAI</span></h1>

                    </div>
                    <div className='flex justify-center'>
                         <p className='text-center  lg:w-[600px] text-gray-500 mt-10'>Our AI feedback tool will help you create a resume that will get you noticed by recruiters and hiring managers. Our in house ATS optimized resume builder will help you create a resume that is proven to work.</p>
                    </div>
               </div>

               <div className='lg:block hidden'>
                    <img className='w-72 absolute top-[1628px] left-[150px]' src={SideImage} alt="" />
                    <img className='w-72 absolute top-[1628px] left-[1080px]' src={RightSideImage} alt="" />
               </div>









          </div>
     );
};

export default LandingPage;