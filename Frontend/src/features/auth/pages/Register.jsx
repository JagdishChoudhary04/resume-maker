import React from 'react'
import { useNavigate, Link } from 'react-router';
import "../auth.form.scss"
const Register = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const navigate = useNavigate()

    return(
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter a username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" name="email" id="email" placeholder="Enter email address"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password"> Password </label>
                        <input type="password" name="password" id="password" placeholder="Enter password" />
                    </div>
                    <button className='button primary-button'> Submit </button>
                </form>
                <p>Already have an account? <Link to ={"/login"}> Login here </Link> </p>
            </div>
        </main>
    )
}

export default Register