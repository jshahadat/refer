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





const SignUpRefer = () => {

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
                         <Link className='flex mb-10' to="/"><span></span><span>Back to refer.me</span></Link>

                         <form onSubmit={handleSubmit(handleSignUp)}>

                              <div className="form-control w-full">
                                   <label className="label"> <span className="label-text">Work Email</span></label>
                                   <input type="email" {...register("email", {
                                        required: true
                                   })} className="input input-bordered w-full" />
                                   {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                              </div>


                              <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text">Password</span>
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
                                        <span className="label-text">Confirm Password</span>
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
                         <h1 className=' text-5xl font-bold mt-28 ml-16 text-white'>You're one step away <br /> from referring top talent <br /> to your company.
                         </h1>
                         <h1 className='ml-16 text-white font-semibold text-xl mt-6'> Create your account and start referring!</h1>
                    </div>
               </div>

          </section>
     );
};

export default SignUpRefer;