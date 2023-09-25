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

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        console.log(e);
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        console.log(formData);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/register', formData);
            setMessage(response.data.message);
            console.log(message);
        }
        catch (error) {
            console.error(error);
            setMessage(`An error occurred during registration`)
        }
        // console.log('handle submit call');
        // e.preventDefault();
        // try {
        //     const response = await fetch('/api/user/register', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const data = await response.json();

        //     console.log(data);

        //     if(response.status === 200) {
        //         setMessage({type: 'Success', text: data.message});
        //         console.log(message);
        //         navigate('/home');
        //     }
        //     else {
        //         setMessage({type: 'error', text: data.message});
        //         console.log(message);
        //     }
        // } catch (error) {
        //     console.error(error);
        //     setMessage({type: 'error', text: 'An error occurred'});
        //     console.log(message);
        // }
    };

    return (
        <div className="loginPage">

            <h2>Sign Up Page</h2>

            <form>

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

                <button type="submit" onSubmit={handleSubmit} className='signupButton'>Signup</button>

                <p>
                    Already have an account? <a onClick={() => {navigate('/login')}}>Click Here</a>
                </p>

            </form>

        </div>
    )
}

export default Signup;