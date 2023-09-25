import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    
    const navigate = useNavigate();

    return (
        <div className="loginPage">

            <h2>Login Page</h2>

            <form>

                <div className="form-block block1">
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Enter user name" />
                </div>

                <div className="form-block block2">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>

                <button type="submit" className='loginButton' onClick={() => {navigate('/home')}}>Login</button>

                <p>
                    Don't have an account? <a onClick={() => {navigate('/register')}}>Click Here</a>
                </p>

            </form>

        </div>
    )
}

export default Login;