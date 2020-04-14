import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

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

            <h1>Current requests</h1>

            <ul>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}