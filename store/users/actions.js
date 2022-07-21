import axios from 'axios';
export default {
    handelGetUser(store, param) {
        let url = '/api/curent-user/profile';
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url, { headers: headers })
            .then(response => {
                store.commit('setUser', response.data.Data)
            }).catch(error => {
                if (error.response.status === 401) {
                    store.commit('setUser', null)
                    this.$router.push('auth/login')
                }else{
                    store.commit('setUser', null)
                    console.log(error.response.data.Message)
                }
            })
    },
    handelGetPersonalUser(store,param){
        let url = '/api/curent-user/users/' + param;
        axios.get(url)
        .then(response => {
            store.commit('setPersonalUser', response.data.Data)
            console.log(response)
        })
    }
    
}