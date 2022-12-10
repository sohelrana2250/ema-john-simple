import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const menuItem = <React.Fragment>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>


        {
            user?.uid ?
                <>

                    <Link to="/addproduct">Add-Product</Link>
                    <Link to='/allproduct'>All-Product</Link>
                    <button className='"btn btn-outline btn-error text-white' onClick={logOut}>Log out</button>
                </>
                :
                <>


                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </>
        }
    </React.Fragment>

    /*

    <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {menuItem}
            </div>
        </nav>
    
    */

    //<i class="fa-brands fa-shopify"></i>

    return (
        <div className="navbar bg-black">
            <div className="flex-1">
                <Link className=" font-bold normal-case text-xl text-white btn btn-outline btn-success">  PI Inventory</Link>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal p-2 text-white">
                    <li>
                        {menuItem}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;