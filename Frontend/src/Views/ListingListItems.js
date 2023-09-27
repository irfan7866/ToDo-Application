import React, { useState, useEffect } from 'react';
import './ListingListItems.css';
import axios from 'axios';

export default function ListingListItems({ userId }) {
    const [items, setItems] = useState([]);

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
    }, [userId]);

    return (
        <div className="list-item-page">
            <ul className="list">
                {items.map((item) => (
                <li className="list-item" key={item.id}>
                    <span className="item-description">{item.task}</span>
                    <div>
                    <button className="update-button">Update</button>
                    <button className="delete-button">Delete</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}
