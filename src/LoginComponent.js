// import "./loginComponent.css"
import Button from '@mui/material/Button';
// import 'boxicons'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginComponent () {

    function handleSubmit(event) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        event.preventDefault();
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {
            "email": email,
            "password": password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (<>
        <section className="w-4/12 flex flex-col p-8 m-auto mt-20 gap-3 rounded-xl shadow-lg shadow-indigo-500/100">
            <h1 className='text-amber-400 text-4xl m-auto'>Fundo</h1>
            <h2 className='text-3xl m-auto mb-5'>Sign in</h2>
            <p className='text-xl m-auto mb-5'>Use your Fundo Account</p>
            <div className="flex flex-col justify-center items-start gap-5">
                <input type="text" placeholder="Email or Phone*" id='email' className='w-full h-12 border border-slate-500 rounded pl-2' />
                <input type="password" placeholder="Password*" id='password' className='w-full h-12 border border-slate-500 rounded pl-2' />
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
                <i className='bx bxs-down-arrow mt-1 text-slate-600'></i>
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