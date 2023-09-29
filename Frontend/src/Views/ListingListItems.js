import React, { useState, useEffect } from 'react';
import './ListingListItems.css';
import axios from 'axios';

export default function ListingListItems({ userId }) {

    const [items, setItems] = useState([]);

    const [editedTask, setEditedTask] = useState('');
    const [editItemId, setEditItemId] = useState(null);

    useEffect(() => {

        const fetchListItems = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/list/getAllListItems/${userId}`);
                setItems(response.data.listItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchListItems();
    }, [userId, items]);


    const handleDelete = async(ItemId) => {
        console.log(ItemId);
        try {
            await axios.delete(`http://localhost:4000/api/list/deleteListItem/${ItemId}`);
        } catch (error) {
            console.error(`Something went wrong and error occurred is: `, error);
        }
    }

    
    const handleUpdate = async(itemId, task) => {
        setEditedTask(task);
        setEditItemId(itemId);
    }

    const handleUpdateSave = async(itemId) => {
        try {
            await axios.put(`http://localhost:4000/api/list/updateListItem/${itemId}`, {
                task: editedTask
            });
            setEditItemId(null);
        } catch (error) {
            console.error(`The error occurred is: `, error);
        }
    }

    return (
        <div className="list-item-page">
            <ul className="list">
                {items.map((item) => (
                <li className="list-item" key={item.id}>
                    {editItemId === item._id ? (
                        <>
                            <input type='text' value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>
                            <div>
                                <button className="update-button" onClick={() => handleUpdateSave(item._id)}>Save</button>
                                <button className="delete-button" onClick={() => setEditItemId(null)}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                        <span className="item-description">{item.task}</span>
                        <div>
                            <button className="update-button" onClick={() => handleUpdate(item._id, item.task)}>Update</button>
                            <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                        </>
                    )}
                </li>
                ))}
            </ul>
        </div>
    );
}
