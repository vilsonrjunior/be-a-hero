import React, { useState } from 'react';
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', response.data.name);
        history.push('/profile')
        
        } catch(err) {
            alert('Login error. Please try again')
        }
    }

    return (
       <div className="logon-container">
        <section className="form">
         <img src={logoImg} alt="heroes"/>

         <form onSubmit={handleLogin}>
             <h1>Sign In</h1>
             <input 
                placeholder="Your ID"
                value={id} 
                onChange={e => setId(e.target.value)}
            />
             <button className="button" type="submit">Sign In</button>
             
             <Link className="back-link" to="/register">
             <FiLogIn size={16} color="#E02041" />   
             Create your account
             </Link>
         </form>
        </section>

        <img src={heroesImg} alt="heroes"/>
       </div> 
    );
}  