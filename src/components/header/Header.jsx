import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to={'/'} >BurlyWood</NavLink>
            <div className={classes.login}>
             {props.isAuth ? <div>{props.login} - <button onClick={props.logout}> Log out </button></div>
                 : <NavLink to={'/login'}><div >Login</div></NavLink>}
            </div>
        </header>

    );
}

export default Header;