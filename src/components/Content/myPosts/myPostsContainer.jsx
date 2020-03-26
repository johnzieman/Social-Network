import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux file/profileReducer';
import MyPost from './myPosts';
import { connect } from 'react-redux';

 

const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addPostActionCreator: (newPostText) =>{
            dispatch(addPostActionCreator(newPostText));
        }
    }
}


const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;