import React, { useEffect, useState } from 'react';

import Navbar from '../../Sheared/Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import AutoSlider from './AutoSlider/AutoSlider';
import Fotter from '../../Sheared/Footer/Fotter';
import axios from 'axios';

const Home = () => {



    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchLinkedInJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/linkedin-jobs');
                setJobs(response.data.elements);
            } catch (error) {
                console.error('Error fetching LinkedIn jobs:', error.message);
            }
        };

        fetchLinkedInJobs();
    }, []); // Empty dependency array ensures the effect runs only once


    return (
        <div className='bg-[#F7FAFC]'>
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <AutoSlider></AutoSlider>
            <Fotter></Fotter>
            <div>
                <h2>LinkedIn Jobs</h2>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <h3>{job.title}</h3>
                            <p>{job.companyName}</p>
                            {/* Add more job details as needed */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;