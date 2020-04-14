import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

export default function NewIncident() {
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo"/>
                    <h1>Create new request</h1>
                    <p>Provide as much information as possible about your request so that you can find a Hero to help</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />   
                        Home
                    </Link>
            </section>
            <form>
              <input placeholder="Request"/>
              <textarea placeholder="Description"/>
              <input placeholder="Amount needed"/>
              <button className="button" type="submit">Submit</button>
            </form> 
        </div>
    </div>
    )
}