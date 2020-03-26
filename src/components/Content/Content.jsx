import React from 'react';
import classes from './Content.module.css'
import InformationPart from './userpage/information';
import MyPost from './myPosts/myPosts';
import MyPostContainer from './myPosts/myPostsContainer';


 
const Content = (props) => {

    return (
        <div className={classes.content}>

            <InformationPart profile={props.profile} />
            <MyPostContainer store={props.store} />
        </div>
    );
}

export default Content; 