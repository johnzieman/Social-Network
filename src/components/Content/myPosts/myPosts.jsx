import React from 'react';
import classes from './myPosts.module.css'
import Post from './posts/post';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validators';

    
  

const MyPost = (props) => {
let postsElements = props.posts.map(
    element => <Post message={element.message} likes={element.likes} key={element.id} />
)


let addPost = (value) => {
    props.addPostActionCreator(value.addPostText);
} 


    return (
        <div className={classes.post}>
            <h3>My post</h3>
            <AddPostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div> 
    );
}


const addPostForm= (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={classes.textarea} component={Textarea} name={"addPostText"} 
            validate={[required]} />
            <button className={classes.button}> Add post </button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form:'addpost'})(addPostForm);

export default MyPost;