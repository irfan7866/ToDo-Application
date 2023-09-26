import React from 'react';
import './Home.css'
import ListItemInput from './ListItemInput'
import { useNavigate, useParams } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    const {_id} = useParams();

    console.log(_id);

    return (
        <div className='mainPage'>
            
            <div className='navbar'> 

                <h1 className='navbar-header'>ToDo Application</h1>
                <button className='logout-button' onClick={() => {navigate('/login')}}>Logout</button>

            </div>

            <ListItemInput />
            
        </div>
    )
}  