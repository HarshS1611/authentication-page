import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import * as types from '../../constants/types';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { TbLogin2 } from "react-icons/tb";

export default function User() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
    const history = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: types.LOGOUT });
        alert("Logged out")
        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = jwtDecode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('userProfile')));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center my-10 ">
            <div className='flex flex-col justify-center gap-5 border-[2px] border-indigo-600 shadow-lg rounded-xl p-5'>
                <div className='flex justify-center'>
                    <CgProfile className="h-20 w-20" />
                </div>
                {user && <div className='flex flex-col gap-5 justify-start ' >
                    <div className='flex justify-start gap-2'><p className='font-bold'>Username :</p> {user.result.name}</div>
                    <div className='flex justify-start gap-6'><p className='font-bold'>Email Id :</p> {user.result.email}</div>
                    <div className='flex justify-start'><p className='font-bold'>JWT Token :</p> {(user.token).substring(0, 50)}...<br />....{(user.token).substring(170, (user.token).length)}</div>
                    <div className='mt-5'>
                        <button onClick={logout} className="flex w-full gap-4 justify-center items-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit" fullWidth variant="contained" color="primary" >
                            <TbLogin2 className='h-5 w-5' />   Logout
                        </button>
                    </div>
                </div>}
            </div>


        </div>
    )
}