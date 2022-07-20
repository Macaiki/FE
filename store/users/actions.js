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
                console.log(error)
            })
    },
    handelGetPersonalUser(store,param){
        let url = '/api/curent-user/users/1';
        axios.get(url)
        .then(response => {
            console.log(response)
        })
    }
    
}