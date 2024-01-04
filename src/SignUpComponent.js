import "./signUpComponent.css"
import image from './assets/signupimg.png'
import Button from '@mui/material/Button';
// import 'boxicons'
import { Link } from "react-router-dom";

function SignUpComponent () {
    return (<>
        <section className="section">
            <div className="sectiondiv">
                <h1 className="firsth1">Fundo</h1>
                <h2 className="firsth2">Create your Fundo Account</h2>
                <div className="input1">
                    <input type="text" placeholder="First Name*" id="firstName" />
                    <input type="text" placeholder="Last Name*" id="lastName" />
                </div>
                <div className="input2">
                    <input type="text" placeholder="Username*" />
                    <span>You can use letters, numbers & periods</span>
                </div>
                <div className="input3">
                    <div className="input31">
                        <input type="text" placeholder="Password*" />
                        <input type="text" placeholder="Confirm*" />
                    </div>
                    <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                </div>
                <div className="lastdiv">
                    <Link to="/login">Sign in instead</Link>
                    {/* <a href="/">Sign in instead</a> */}
                    <Button variant="contained" id="register">Register</Button>
                </div>
            </div>
            <div className="image">
            <img src={image} alt="img" />
            </div>
        </section>
        <section className="sectionBelow1">
            <div className="sectionB11">
                <p>English (United States)</p>
                <i class='bx bxs-down-arrow'></i>
            </div>
            <div className="sectionB21">
                <span>Help</span>
                <span>Privacy</span>
                <span>Terms</span>
            </div>
        </section>
    </>)
}

export default SignUpComponent;