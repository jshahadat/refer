import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGithub } from 'react-icons/fa';
import useToken from '../../../hooks/useToken';
import { FaLessThan } from 'react-icons/fa';



const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, gitProvider, providerLogin, } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const [previousLocation, setPreviousLocation] = useState(null);

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                setLoginError(error.message);
            });
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

    return (

        <section className=" min-h-screen flex  justify-center">

            <div className="bg-[#F7FAFC] flex  lg:w-2/3 w-auto  p-2 items-center lg:pl-32 lg:pr-28">

                <div className="px-4 md:px-16">
                    <Link className='flex' to="/"><span></span><span>Back to refer.me</span></Link>
                    <h2 className="font-semibold text-xl text-[#002D74] mb-2 mt-12">Sign in</h2>
                    <p>Use your Google or LinkedIn account or enter your email and password below to access your account.</p>
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
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Email<span className=' text-red-500 ml-2 font-semibold'>*</span></span></label>
                            <input type="text"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full max-w-2xl" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Password<span className=' text-red-500 ml-2 font-semibold'>*</span></span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full " />

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-[#1863E5] w-full mt-3' value="Sign In" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>


                    <div className='lg:flex justify-between'>
                        <div className="mt-12 text-xs font-medium flex items-center text-[#1863E5]">
                            <p className='text-xs font-medium'>Don't have an account?</p>
                            <Link className='ml-3 text-[#1863E5]' to='/signup'>Sign Up</Link>
                        </div>
                        <div className="mt-3  lg:mt-12 flex items-center text-[#1863E5]">
                            <p className='text-xs font-medium'>Forgot your password?</p>
                            <Link className='ml-3 text-[#1863E5] text-xs font-medium ' to='/'>Recover my password</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className='m bg-red md:block hidden w-1/2  bg-gradient-to-b from-purple-500 via-indigo-500 to-indigo-500'>
                <div>
                    <h1 className=' text-5xl font-bold mt-28 ml-16 text-white'>Welcome back to <br /> refer.me!
                    </h1>
                    <h1 className='ml-16 text-white font-semibold text-xl mt-6'> Sign in in to your account to access our platform.</h1>
                </div>
            </div>

        </section>

    );
};

export default Login;