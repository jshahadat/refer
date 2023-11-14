import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, updateUser, gitProvider, providerLogin, } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    const [previousLocation, setPreviousLocation] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!ConfirmPasswordVisible);
    };



    if (token) {
        navigate('/');
    }


    const handleGitHubSignIn = () => {
        gitProvider(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (previousLocation) {
                    // Redirect to the previous location
                    window.location.href = previousLocation;
                } else {
                    // Redirect to the home page
                    window.location.href = '/';
                }

            })
            .catch(error => console.error(error))
    }



    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.firstName,
                    role: data.option
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.firstName, data.email, data.option);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (firstName, email, role) => {
        const user = { firstName, email, role };
        fetch('https://assignment-twelfth-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }






    return (

        <section className="min-h-screen flex  justify-center">
            <div className="bg-[#F7FAFC] flex  lg:w-2/3 w-auto  p-2 items-center lg:pl-32 lg:pr-28">

                <div className="px-4 md:px-16">

                    <Link className='flex' to="/"><span></span><span>Back to refer.me</span></Link>
                    <h2 className="font-semibold text-xl text-[#002D74] mb-2 mt-12">Create an account</h2>
                    <p>Use your Google or LinkedIn account or enter your information to create your account.</p>
                    <button onClick={handleGoogleSignIn} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Sign in with Google
                    </button>
                    <button onClick={handleGitHubSignIn} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <FaGithub className='mr-3' width="25px" ></FaGithub>   Login with GitHub
                    </button>
                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className='lg:flex'>


                            <div className="form-control w-full lg:mr-3">
                                <label className="label"> <span className="label-text">First Name<span className=' text-red-500 ml-1 font-semibold'>*</span></span></label>
                                <input type="text" {...register("firstName", {
                                    required: "First Name is Required"
                                })} className="input input-bordered w-full" />
                                {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                            </div>


                            <div className="form-control w-full lg:ml-3">
                                <label className="label"> <span className="label-text">Last Name<span className=' text-red-500 ml-1 font-semibold'>*</span></span></label>
                                <input type="text" {...register("lastName", {
                                    required: "Last Name is Required"
                                })} className="input input-bordered w-full" />
                                {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                            </div>


                        </div>

                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Email<span className=' text-red-500 ml-1 font-semibold'>*</span></span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        {/* <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div> */}



                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password<span className=' text-red-500 ml-1 font-semibold'>*</span></span>
                            </label>

                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })}
                                    className="input input-bordered w-full pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                                >
                                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                </button>
                            </div>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="mt-2 mb-3 text-xs font-medium flex items-center">
                            <p className='text-xs font-medium'>A minimum of 6 characters must be used, with 1 uppercase, 1 lowercase, 1 number, and 1 special character.</p>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Confirm Password<span className=' text-red-500 ml-1 font-semibold'>*</span></span>
                            </label>
                            <div className='relative'>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: value => value === watch('password') || "Passwords do not match"
                                    })}
                                    className="input input-bordered w-full"
                                />

                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                                >
                                    <FontAwesomeIcon icon={ConfirmPasswordVisible ? faEyeSlash : faEye} />
                                </button>
                            </div>
                            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Where did you hear about us? (optional)</span></label>
                            <select
                                {...register('option')}
                                className="select select-bordered w-full">
                                <option>Chose one an option</option>
                                <option> Seller</option>
                            </select>
                            {errors.option && <p className='text-red-500'>{errors.option.message}</p>}
                        </div>

                        <div className="mt-8 text-xs font-medium flex items-center">
                            <p className='text-xs font-medium'>By signing up I agree to the </p>
                            <Link className='underline ml-1' to='/'> terms and conditions</Link>
                            <p className='text-xs font-medium ml-1'> and the</p>
                            <Link className=' underline ml-1' to='/'> privacy policy</Link>
                        </div>

                        <input className='btn bg-[#1863E5] w-full border-none mt-4 capitalize' value="Create Account" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>


                    <div className="mt-8 text-xs font-medium flex items-center justify-center text-[#1863E5]">
                        <p className='text-xs font-medium'>Already have an account?</p>
                        <Link className='ml-3 text-[#1863E5]' to='/login'>Log In</Link>
                    </div>

                </div>



            </div>

            <div className='m bg-red md:block hidden w-1/2  bg-gradient-to-b from-purple-500 via-indigo-500 to-indigo-500'>
                <div>
                    <h1 className=' text-5xl font-bold mt-28 ml-16 text-white'>You're one step away <br /> from getting your dream <br /> job.
                    </h1>
                    <h1 className='ml-16 text-white font-semibold text-xl mt-6'> Create your account and get referred to your next <br /> job!</h1>
                </div>
            </div>

        </section>


    );
};

export default Register;