import React from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { TextField } from '@mui/material';

function LoginComponent () {

    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: { preventDefault: () => void; }) {
        const email = (document.getElementById("email")as HTMLInputElement).value;
        const password = (document.getElementById("password")as HTMLInputElement).value;

        event.preventDefault();
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {
            "email": email,
            "password": password
        })
            .then(res => {
                navigate("/header");
                localStorage.setItem("accessToken", res.data.id);

                const details = {
                    "fullName" : `${res.data.firstName} ${res.data.lastName}`,
                    "email" : res.data.email,
                }
                
                localStorage.setItem("details", JSON.stringify(details));
            })
            .catch(err => {
                setError("email or password is incorrect!! Please try again...");
            });
    }

    return (<>
        <section className="w-4/12 flex flex-col p-8 m-auto mt-20 gap-3 rounded-xl shadow-lg shadow-indigo-500/100">
            <h1 className='text-amber-400 text-4xl m-auto'>Fundo</h1>
            <h2 className='text-3xl m-auto mb-5'>Sign in</h2>
            <p className='text-xl m-auto mb-5'>Use your Fundo Account</p>
            <div className="flex flex-col justify-center items-start gap-8">
                <TextField id="email" placeholder="Email or Phone*" type="text" variant="outlined" className='w-full h-12 border border-slate-500 rounded pl-2' />
                <TextField id="password" placeholder="Password*" type="password" variant="outlined" className='w-full h-12 border border-slate-500 rounded pl-2' />
                <h1 className='text-center text-4xl font-bold m-1  w-full text-red-500'>{error != null ? error : ""}</h1>
                <Link to="/" className='text-left'>Forgot password</Link>
                <div className="w-full flex justify-between items-center">
                    <Link to="/">Create Account</Link>
                    <Button variant="contained" onClick={handleSubmit}>Login</Button>    
                </div>
            </div>
        </section>
        <section className="w-1/3 flex p-1 m-auto mt-5 justify-between">
            <div className="w-2/5 flex gap-5">
                <p className='text-0xs text-slate-600'>English (United States)</p>
                <i className="fa-solid fa-caret-down mt-1 text-slate-600"></i>
            </div>
            <div className="w-1/2 flex justify-between text-slate-600">
                <span>Help</span>
                <span>Privacy</span>
                <span>Terms</span>
            </div>
        </section>
    </>)
}

export default LoginComponent;