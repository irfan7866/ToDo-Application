import { useNavigate } from "react-router-dom";
import './Login.css'
import { useState } from "react";
import axios from 'axios';

function Login() {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!formData.username || !formData.password) {
            alert('Please enter the username and password first');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/user/login', formData);

            if(response.status === 200) {
                const user = response.data.user;
                // alert(`User login successfully, User id: ${user._id}`);
                navigate(`/home/${user._id}`);
            }
            else {
                alert(`An error occurred, Please try again`)
            }
        }
        catch (error) {
            alert(`Invalid email or password`);
        }
    }

    return (
        <div className="loginPage">

            <h2>Login Page</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-block block1">
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Enter user name" />
                </div>

                <div className="form-block block2">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter your password" />
                </div>

                <button type="submit" className='loginButton'>Login</button>

                <p>
                    Don't have an account? <a onClick={() => {navigate('/register')}}>Click Here</a>
                </p>

            </form>

        </div>
    )
}

export default Login;