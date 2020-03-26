import { usersApi } from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT ='SET_TOTAL_USER_COUNT';

let initialState = {
    users: [ ],
    pageSize:15,
    totalUsersCount: 0,
    currentPage:1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userID) {
                        return { ...element, followed: true }
                    }
                    return element;
                })
            }}
            
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userID) {
                        return { ...element, followed: false }
                    }
                    return element;
                })
            }}

        case SET_USERS: {
            return{
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        default:
            return state;
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) =>{
    return(dispatch) =>{ 
        usersApi.getUsers(currentPage, pageSize)
        .then( data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) =>{
    return(dispatch) =>{
        usersApi.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
              dispatch(followSucces(userId))
            }
        })
    }
}

export const unfollow = (userId) => {
    return(dispatch) =>{
        usersApi.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSucces(userId))
            }
        })
    }
}


export const followSucces = (userID) => ({ type: FOLLOW, userID })   
export const unfollowSucces = (userID) => ({ type: UNFOLLOW, userID })   
export const setUsers  = (users) => ({type: SET_USERS, users}) 
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) =>({type: SET_TOTAL_USER_COUNT, count: totalUsersCount})

export default usersReducer;