import React from 'react';
import './Home.css'
import ListItemInput from './ListItemInput'

export default function Home() {
    return (
        <div className='mainPage'>
            
            <div className='navbar'> 

                <h1 className='navbar-header'>ToDo Application</h1>
                <button className='logout-button'>Logout</button>

            </div>

            <ListItemInput />
            
        </div>
    )
}  