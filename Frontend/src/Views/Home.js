import React from 'react';
import './Home.css'
import ListItemInput from './ListItemInput'
import { useNavigate, useParams } from 'react-router-dom';
import ListingListItems from './ListingListItems';

export default function Home() {

    const navigate = useNavigate();
    const {_id} = useParams();

    return (
        <div className='mainPage'>
            
            <div className='navbar'> 

                <h1 className='navbar-header'>ToDo Application</h1>
                <button className='logout-button' onClick={() => {navigate('/login')}}>Logout</button>

            </div>

            <ListItemInput userId = {_id}/>

            <ListingListItems userId = {_id}/>
            
        </div>
    )
}  