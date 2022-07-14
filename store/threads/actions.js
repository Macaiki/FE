import axios from 'axios';
export default {
    handleGetThreads(store) {
        let url = '/api/threads';
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url, 
            { headers: headers })
            .then(response => {
                // console.log(response.data);
                store.commit('setThreads', response.data.Data)
            }).catch(error => {
                console.log(error)
            })
    }
}