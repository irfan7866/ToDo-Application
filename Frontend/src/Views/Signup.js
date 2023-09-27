import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './Login.css'

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
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

        try {
            const response = await axios.post('http://localhost:4000/api/user/register', formData);

            if (response.status === 200) {
                const user = response.data.user;
                navigate(`/home/${user._id}`)
            } else {
                alert('An error occurred, Please try again');
            }
        }
        catch (error) {
            alert('User already registered, Please try to login or signup using different email');
        }
    };

    return (
        <div className="loginPage">

            <h2>Sign Up Page</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-block">
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name" required/>
                </div>

                <div className="form-block">
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Enter user name" required/>
                </div>

                <div className="form-block">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter your password" required/>
                </div>

                <button type="submit" className='signupButton'>Signup</button>

                <p>
                    Already have an account? <a onClick={() => {navigate('/login')}}>Click Here</a>
                </p>

            </form>

        </div>
    )
}

export default Signup;