import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [whatsapp, setWhatsapp] = useState('');  
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');  
    
    const history = useHistory();

    async function handleRegister(e) {
       e.preventDefault();  

       const data = {
           name,
           email,
           whatsapp,
           city,
           country,
       }
       
       try {
        const response = await api.post('ngos', data)

        alert(`Your ID is ${response.data.id}`)
        history.push('/')
       } catch(err) {
         alert('Error. Please try again')
       }
    }

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
                <form onSubmit={handleRegister}>
                  <input 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <input 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input 
                    placeholder="WhatsApp number"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                  />
                  
                  <div className="input-group">
                    <input 
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input 
                        placeholder="Country" style={{ width: 120 }}
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                  </div>

                  <button className="button" type="submit">Submit</button>
                </form> 
            </div>
        </div>
    )
}