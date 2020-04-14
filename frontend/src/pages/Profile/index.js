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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <strong>AMOUNT:</strong>
                    <p>£150.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>REQUEST:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

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