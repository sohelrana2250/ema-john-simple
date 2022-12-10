import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setRegister(true);
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            });

    }

    return (
        <div className='form-container'>
            <h2 className='form-title pt-7'> <button className="btn btn-outline btn-error font-bold text-2xl">Sign Up Form</button>  </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login' className='text-red-600 font-bold text-xl'>Login</Link></p>
            <div>
                {
                    register && <p className='text-3xl text-danger text-center'>Successfully Register</p>
                }
                {error && <p className='text-3xl text-center text-red-600'>{error}</p>}
            </div>
        </div>
    );
};

export default SignUp;