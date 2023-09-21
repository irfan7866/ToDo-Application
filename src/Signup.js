import {useNavigate} from "react-router-dom";
import './Login.css'

function Signup() {
    const navigate = useNavigate();
    return (
        <div className="loginPage">
            <h2>Sign Up Page</h2>
            <form>
                <div className="form-block">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-block">
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Enter user name" />
                </div>
                <div className="form-block">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button type="submit" onClick={() => {navigate('/home')}}>Signup</button>
            </form>
        </div>
    )
}

export default Signup;