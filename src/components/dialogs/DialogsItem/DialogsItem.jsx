import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css'




const DialogsItem = (props) => {
    return (
        <div className={classes.dialog}>
          <div className={classes.avatarItem}></div>  <NavLink to={'/messages/' + props.id} activeClassName={classes.activeLink}> {props.name} </NavLink>
        </div>
    );
}

export default DialogsItem;