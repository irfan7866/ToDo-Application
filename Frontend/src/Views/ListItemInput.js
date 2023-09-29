import React, { useState } from 'react';
import './ListItemInput.css'
import axios from 'axios';

export default function ListItemInput({userId}) {

    const [task, setTask] = useState('');

    const handleAddTask = async() => {
        const data = {
            userId: userId,
            task: task
        }

        try {
            if(!task) {
                alert("Please enter any task first");
                return;
            }
            await axios.post('http://localhost:4000/api/list/addListItem', data);
            setTask('');
        }
        catch (error) {
            console.error("Something went wrong, the error encountered is:", error);
        }
    }

    return (

        <div className="ListItemInputPage">

            <input placeholder="Enter your task" className="listItemInput" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className="addButton" onClick={handleAddTask}>Add Task</button>

        </div>

    )

}