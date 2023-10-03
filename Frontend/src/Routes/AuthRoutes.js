import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from '../Views/Login';
import Signup from '../Views/Signup';
import Home from '../Views/Home';

export default function Routing() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home/:_id" element={<Home />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}