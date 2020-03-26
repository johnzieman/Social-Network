import React from 'react';
import classes from './post.module.css'


const Post = (props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.usersImg}>#ava</div> {props.message}
            <div className={classes.userLikes}>{String.fromCharCode(9786)} {props.likes} </div>
        </div>
    );
}

export default Post;