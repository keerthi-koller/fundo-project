import React from "react";
// import "./signUpComponent.css"
import axios from 'axios';
import image from '../assets/signupimg.png'
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function SignUpComponent () {

    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: { preventDefault: () => void; }) {
        const firstName = (document.getElementById("firstName")as HTMLInputElement).value;
        const lastName = (document.getElementById("lastName")as HTMLInputElement).value;
        const email = (document.getElementById("email")as HTMLInputElement).value;
        const password = (document.getElementById("password")as HTMLInputElement).value;

        event.preventDefault();
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", {
            "firstName": firstName,
            "lastName": lastName,
            "service": "advance",
            "email": email,
            "password": password
        })
            .then(res => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
                setError("invalid credentials");
            });
    }


    return (<>
        <div className="flex justify-center	items-center shadow-lg shadow-indigo-500/100 bg-white w-2/4 h-auto rounded-xl mt-40 m-auto p-5">
            <div className="w-3/5 flex flex-col gap-7">
                <h1 className="text-amber-400 text-3xl">Fundo</h1>
                <h2 className="text-xl">Create your Fundo Account</h2>
                <div className="flex gap-5">
                    <input type="text" placeholder="First Name*" id="firstName" className='border border-slate-500 rounded pl-2 h-9 w-full' />
                    <input type="text" placeholder="Last Name*" id="lastName" className='border border-slate-500 rounded pl-2 h-9 w-full' />
                </div>
                <div className="flex flex-col gap-2">
                    <input type="text" placeholder="User Email*" id='email' className='border border-slate-500 rounded pl-2 h-9 w-full' />
                    <span className='text-0xs'>You can use letters, numbers & periods</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-5">
                        <input type="text" placeholder="Password*" id='password' className='border border-slate-500 rounded pl-2 h-9 w-full' />
                        <input type="text" placeholder="Confirm*" id='confirmPassword' className='border border-slate-500 rounded pl-2 h-9 w-full' />
                    </div>
                    <span className='text-0xs'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                </div>
                <h1 className='text-center text-4xl font-bold mt-1 text-red-500'>{error != null ? error : ""}</h1>
                <div className="w-full flex items-center justify-between">
                    <Link to="/login" className='text-0xl '>Sign in instead</Link>
                    <Button variant="contained" id="register" onClick={handleSubmit}>Register</Button>
                </div>
            </div>
            <div className="w-2/5">
                <img src={image} alt="img" className='w-full h-full' />
            </div>
        </div>
        <section className="w-1/2 flex m-auto mt-3">
            <div className="w-1/2 flex gap-5">
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

export default SignUpComponent;