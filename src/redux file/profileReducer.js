import { usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';


let initialState = {
    posts: [
        { message: "Hi :)", likes: 20 },
        { message: "My name is John Zieman", likes: 36 },
        { message: "You are welcome to BurlyWood!", likes: 109 },
        { message: "This is a social network based on a clear React and Node", likes: 97 },
        { message: "This is my first big project", likes: 62 }
    ],
    profile: null
}
            
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPostText,
                likes: 0
            }
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case SET_USERS_PROFILE:{
           return {
               ...state, profile: action.profile
            }
        }
        default: return state;
    }
}
export const getUserProfile = (userId)=> (dispatch)=> {
        usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data));
        });
} 


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUsersProfile = (profile)=>({
    type: SET_USERS_PROFILE, profile
})

export default profileReducer;
