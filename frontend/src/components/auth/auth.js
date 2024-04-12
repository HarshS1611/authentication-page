import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Input from './input';
import loginImage from "../../login.png"
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const AuthPage = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-24 w-auto"
                    src={loginImage}
                    alt="Your Company"
                />
                <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    <span component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</span> in to your account
                </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className='flex justify-between w-full'>
                            {isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" placeholder="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" placeholder="Last Name" handleChange={handleChange} half />
                                </>
                            )}

                        </div>




                    <div>

                        <div className="flex gap-2 flex-col">
                            <Input name="email" label="Email Address" placeholder="Email" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" placeholder="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repeat Password" placeholder="Confirm Password" handleChange={handleChange} type="password" />}
                        </div>
                    </div>
                    <button                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 type="submit" fullWidth variant="contained" color="primary" >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </button>

                    <div container justifyContent="flex-end">
                        <div item>
                            <button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AuthPage;