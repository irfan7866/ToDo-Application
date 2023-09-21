import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const navigate = useNavigate();
    return (
        <div className="loginPage">
            <h2>Login Page</h2>
            <form>
                <div className="form-block">
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Enter user name" />
                </div>
                <div className="form-block">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className='loginButton' onClick={() => {navigate('/home')}}>Login</button>
                <h6>OR</h6>
                <button type="submit" className='signupButton' onClick={() => {navigate('/register')}}>SignUp</button>
            </form>
        </div>
    )
}

export default Login;