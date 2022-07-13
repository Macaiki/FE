import axios from 'axios';
export default {
    handleGetThreads(store) {
        let url = 'https://virtserver.swaggerhub.com/restuarachman/Macaiki/1.0.0/api/v1/threads?limit=5&keyword=lorem&trending=true&community=lorem&forYou=lorem'
        axios.get(url)
            .then(response => {
                store.commit('setThreads', response.data.Data)
            }).catch(error => {
                console.log(error)
            })
    }
}