import React, { useState, useEffect } from 'react';
import './ListingListItems.css';
import axios from 'axios';

export default function ListingListItems({ userId }) {

    const [items, setItems] = useState([]);

    const [completed, setCompleted] = useState([]);
    const [inComplete, setInComplete] = useState([]);

    const [editItemId, setEditItemId] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const [editComplete, setEditComplete] = useState(false);

    useEffect(() => {

        const fetchListItems = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/list/getAllListItems/${userId}`);
                setItems(response.data.listItems);

                const complete = items.filter((item) => item.isCompleted);
                const incomplete = items.filter((item) => !item.isCompleted);

                setCompleted(complete);
                setInComplete(incomplete);

            } catch (error) {
                alert('Error fetching data:', error);
            }
        };

        fetchListItems();
    }, [userId, items]);


    const handleDelete = async(ItemId) => {
        try {
            await axios.delete(`http://localhost:4000/api/list/deleteListItem/${ItemId}`);
        } catch (error) {
            alert(`Something went wrong and error occurred is: `, error);
        }
    }
    
    const handleUpdate = async(itemId, task, completeness) => {
        setEditItemId(itemId);
        setEditedTask(task);
        setEditComplete(completeness);
    }

    const handleUpdateSave = async(itemId) => {
        try {
            await axios.put(`http://localhost:4000/api/list/updateListItem/${itemId}`, {
                task: editedTask,
                isCompleted: editComplete
            });
            setEditItemId(null);
        } catch (error) {
            alert(`The error occurred is: `, error);
        }
    }

    const handleIncomplete = async(itemId, task, iscompleted) => {
        try {
            await axios.put(`http://localhost:4000/api/list/updateListItem/${itemId}`, {
                task: task,
                isCompleted: !iscompleted
            })
        } catch (error) {
            alert(`The error occurred is: `, error);
        }
    }

    return (
        <div className="list-item-page">
            <ul className="list">
                <h1>Incomplete Items</h1>
                {inComplete.map((item) => (
                <li className="list-item" key={item.id}>
                    {editItemId === item._id ? (
                        <>
                            <input 
                                type='text' 
                                value={editedTask} 
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                            <div>
                                <button className="buttons" onClick={() => handleUpdateSave(item._id)}>Save</button>
                                <button className="buttons" onClick={() => setEditItemId(null)}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                        <span className="item-description">{item.task}</span>
                        <div>
                            <button className="buttons" onClick={() => handleIncomplete(item._id,item.task, item.isCompleted)}>Completed</button>
                            <button className="buttons" onClick={() => handleUpdate(item._id, item.task, item.isCompleted)}>Update</button>
                            <button className="buttons" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                        </>
                    )}
                </li>
                ))}
            </ul>
            <ul className="list">
                <h1>Completed Items</h1>
                {completed.map((item) => (
                <li className="list-item" key={item.id}>
                    <span className="item-description">{item.task}</span>
                    <div>
                        <button className="buttons" onClick={() => handleIncomplete(item._id, item.task, item.isCompleted)}>Incomplete</button>
                        <button className="buttons" onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}
