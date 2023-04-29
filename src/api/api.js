import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "13399828-72d6-4fa6-8e92-bfa29a2cc5d6"
    }
})
/*export const getUsers = (currentPage = 1 ,pageSize =10 ) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials:true}).then(response =>{return response.data})
}*/
export const usersAPI = {
    getUsers (currentPage = 1 ,pageSize =100 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{return response.data})

    },
    follow(userId){
       return  instance.post(`follow/${userId}`)
    },

    unfollow(userId){
         return instance.delete(`follow/${userId}`)

    },
    getProfile(userId){

        return  instance.get(`profile/` + userId);

    }

}
export const authAPI = {
    me(){
        return   instance.get(`auth/me`)
    },
    login(email, password,rememberMe = false ){
        return   instance.post(`auth/login`, {email, password,rememberMe})
    },
    logout(){
        return   instance.delete(`auth/login`)
    }

}
export const profileAPI = {
    getProfile(userId){// почему не используется????
        return  instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return  instance.put(`profile/status`,{status:status});
    }
}

