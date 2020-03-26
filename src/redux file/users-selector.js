import { createSelector } from "reselect"

export const getUsersSelector = (state) =>{
    return state.usersPage.users
}

//using reselect with getUserSelector

export const getUsers = createSelector(getUsersSelector,(users) =>{
    return users.filter( element =>true )
} )

export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) =>{
    return state.usersPage.currentPage
}