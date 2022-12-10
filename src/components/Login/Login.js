import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [LogiInerror, setError] = useState('');
    const [login, setLogin] = useState(false);
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setLogin(true);
                setError('');

                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);

            });
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'> <button className='btn btn-outline btn-primary text-2xl mt-7'>Login Form</button></h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input onClick={toast.success('Successfully-Login')
                } className='btn-submit' type="submit" value="Login" />
                <Toaster />
            </form>
            <p>New to ema john <Link to='/signup' className='text-red-600 font-bold text-xl'>Create a New Account</Link></p>
            <div>
                {
                    login && <p className='text-3xl text-danger text-center'>Successfully Login</p>
                }
                {LogiInerror && <p className='text-3xl text-center text-red-600'>{LogiInerror}</p>}
            </div>

        </div>



    );
};

export default Login;