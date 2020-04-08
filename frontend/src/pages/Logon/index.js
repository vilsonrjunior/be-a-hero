import React from 'react';
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return (
       <div className="logon-container">
        <section className="form">
         <img src={logoImg} alt="heroes"/>

         <form>
             <h1>Sign In</h1>
             <input placeholder="Your ID" />
             <button className="button" type="submit">Sign In</button>
             
             <a href="/register">
             <FiLogIn size={16} color="#E02041" />   
             Create your account
             </a>
         </form>
        </section>

        <img src={heroesImg} alt="heroes"/>
       </div> 
    );
}  