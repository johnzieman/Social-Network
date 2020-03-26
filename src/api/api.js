import * as axios from 'axios';

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'f8344f9a-57f2-4a92-833f-33a6cd8c2d3e' }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instanse.get( `users?page=${currentPage}&count=${pageSize}` )
            .then(response => {
                return response.data;
        });
    },
 
    follow(userId){
        return instanse.post(`follow/${userId}`);
    },

    unfollow(userId){
        return instanse.delete(`follow/${userId}`);
    },
    getProfile(userId){
        return instanse.get(`profile/`+ userId);
    }
}


export const authApi = {
    me(){
       return instanse.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instanse.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instanse.delete(`auth/login`);
    }
}
