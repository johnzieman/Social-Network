import React from 'react';
import classes from './users.module.css'


let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: '1', photoUrl: '', followed: true, fullName: 'John Zieman', status: 'I am using BurlyWood', location: { city: 'Namangan', country: 'Uzbekistan' } },
            { id: '2', photoUrl: '', followed: true, fullName: 'David Bouie', status: 'I am using BurlyWood', location: { city: 'San-Francisco', country: 'USA' } },
            { id: '3', photoUrl: '', followed: true, fullName: 'Ann Newman', status: 'Hey, there, I am using BurlyWood', location: { city: 'San-Diego', country: 'USA' } }

        ])
    }

    return <div className={classes.main}>
        {
            props.users.map(element => <div key={element.id}>
               <div className={classes.miniMain}> 
                   <span>
                    <div className={classes.avatarMini}></div>
                    <div>{element.followed
                                ? <button onClick={() => { props.unfollow(element.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(element.id) }}>Follow</button>}
                       </div>
                </span>

                <span>
                    <div>{element.fullName}</div>
                    <div>{element.status}</div>
                </span>

                <span>
                    <div>{element.location.city}</div>
                    <div>{element.location.country}</div>
                </span>
                </div>
            </div>)
        }
    </div>
}

export default Users;

// if (props.users.length === 0) {
//     props.setUsers( users : [
//          { id:'1', photoUrl: '', followed: true, fullName:'John', status: 'I am the founder of BurlyWood', location: { city: 'Namangan', country: 'Uzbekistan' } },
//          { id:'2', photoUrl: '', followed: true, fullName:'David', status: 'I am co-founder of BurlyWood', location: { city: 'San-Francisco', country: 'USA' } },
//          { id:'3', photoUrl: '', followed: true, fullName:'Ann', status: 'Hey, there, I am using BurlyWood', location: { city: 'San-Diego', country: 'USA' } }

//     ])
// }
