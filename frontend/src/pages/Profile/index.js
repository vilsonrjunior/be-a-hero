import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './style.css';

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="heroes"/>
                <span>Welcome, NGO</span>

                <Link className="button" to="/incidents/new">Create new request</Link> 
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>
        </div>
    )
}