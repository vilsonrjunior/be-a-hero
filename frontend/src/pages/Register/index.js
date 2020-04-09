import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"/>
                        <h1>Sign Up</h1>
                        <p>Create an account for your organisation and publish good causes you can raise money to</p>

                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041" />   
                            Already registered
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