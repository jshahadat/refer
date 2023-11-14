import React from 'react';
import Heart from "../../../assets/logo1.svg"

const Fotter = () => {
    return (

        <div className='bg-[#F6F6F6] '>
            <div className=' lg:pt-20 pt-10 lg:px-20'>
                <div className='lg:flex lg:justify-between'>
                    <div className='text-center lg:text-left'>
                        <h1 className='lg:text-5xl text-4xl font-bold  lg:mx-0 mx-12 '>Your career is worth investing in.</h1>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#3C99FF] lg:mt-4'>Try premium.</h1>
                    </div>
                    <div className='flex justify-center lg:mt-0 mt-6'>
                        <button className='btn w-48 lg:w-auto rounded-full border-none hover:scale-105 duration-300 text-white bg-gradient-to-r from-[#329EFF]  to-[#9355FF]'>Upgrade to Premium
                        </button>
                    </div>
                </div>

            </div>
            <hr className='lg:mt-20 mt-10 lg:mb-5 mb-2 lg:ml-32 ml-5 lg:mr-32 mr-5' />
            <footer className="footer p-10 text-base-content">

                <aside className='flex'>
                    <img className='lg:w-24 w-32' src={Heart} alt="" />
                    <h1 className=' text-4xl font-bold text-[#1863E5] mb-4'>Refer Me</h1>
                </aside>
                <nav>
                    <header className=" text-black"><strong>Tools</strong></header>
                    <a className="link link-hover">AI Resuume Feedback</a>
                    <a className="link link-hover">Resume Builder</a>
                    <a className="link link-hover">Job Referrals</a>
                    <a className="link link-hover">Job Board</a>
                </nav>
                <nav>
                    <header className=""><strong>Subscription</strong></header>
                    <a className="link link-hover">Refer Me Premium</a>
                    <header className="lg:mt-4"><strong>Resources</strong></header>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Frequently Asked Questions</a>
                    <a className="link link-hover">Interview Handbook</a>
                </nav>

                <nav>
                    <header className=""><strong>Partnerships</strong></header>
                    <a className="link link-hover">interview.study</a>
                    <a className="link link-hover">Press Kit</a>
                    <header className="lg:mt-4"><strong>Community</strong></header>
                    <a className="link link-hover">Discord</a>

                </nav>
                <nav>
                    <header className=""><strong>Site</strong></header>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms and Condition</a>
                    <a className="link link-hover">Cookies</a>
                    <a className="link link-hover">Accessibility</a>

                </nav>
            </footer>
        </div>
    );
};

export default Fotter;