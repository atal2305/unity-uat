import React from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

const Loginform = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/verify');
        }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>NSDL Verification Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" />
                </div>

                <button type="submit">Login</button>
            </form>
        </div> 
    );
};

export default Loginform;