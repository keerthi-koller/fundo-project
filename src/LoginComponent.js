import "./loginComponent.css"
import Button from '@mui/material/Button';
// import 'boxicons'
import SignUpComponent from "./SignUpComponent";
import { Link } from "react-router-dom";

function LoginComponent () {
    return (<>
        <section className="sectionLogin">
            <h1>Fundo</h1>
            <h2>Sign in</h2>
            <p>Use your Fundo Account</p>
            <div className="section1">
                <input type="text" placeholder="Email or Phone*" />
                <input type="password" placeholder="Password*" />
                <a href="/">Forgot password</a>
                <div className="btnlogin">
                    <Link to="/">Create Account</Link>
                    {/* <a href="/">Create Account</a> */}
                    <Button variant="contained">Login</Button>    
                </div>
            </div>
        </section>
        <section className="sectionBelow">
            <div className="sectionB1">
                <p>English (United States)</p>
                <i class='bx bxs-down-arrow'></i>
            </div>
            <div className="sectionB2">
                <span>Help</span>
                <span>Privacy</span>
                <span>Terms</span>
            </div>
        </section>
    </>)
}

export default LoginComponent;