import React from 'react';
import classes from './users.module.css'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.main}>
        <div className={classes.cursorPointer}>
            {
                pages.map(element => {
                    return <span className={props.currentPage === element && classes.selectedPage}
                        onClick={(e) => { props.onPageChanged(element) }}  > {element}
                    </span>
                })
            }
        </div>

        {
            props.users.map(element => <div key={element.id}>
                <div className={classes.miniMain}>
                    <span>
                        <div className={classes.avatarMini}>
                            <NavLink to={'/profile/' + element.id}> <img src={element.photos.large != null ? element.photos.small : ""} /></NavLink>
                        </div>
                        <div>{element.followed
                            ? <button onClick={() => {
                                props.unfollow(element.id)
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                props.follow(element.id)
                            }}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <div>{element.name}</div>
                        <div>{element.status != null ? element.status : 'No status yet'}</div>
                    </span>

                    <span>
                        <div>{'element.location.city'}</div>
                        <div>{'element.location.country'}</div>
                    </span>
                </div>
            </div>)
        }
    </div>
}

export default Users;