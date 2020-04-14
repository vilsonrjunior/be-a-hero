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

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />   
                        Home
                    </Link>
            </section>
            <form>
              <input placeholder="Name"/>
              <input placeholder="Email"/>
              <input placeholder="WhatsApp number"/>
              
              <div className="input-group">
                <input placeholder="City"/>
                <input placeholder="Country" style={{ width: 120 }}/>
              </div>

              <button className="button" type="submit">Submit</button>
            </form> 
        </div>
    </div>
    )
}