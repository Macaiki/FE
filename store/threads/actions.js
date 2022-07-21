import axios from 'axios';
export default {
   async handleGetThreads(store) {
        let url = '/api/threads?limit=10&page=1';
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
      await  axios.get(url, { headers: headers })
            .then(response => {
                // console.log(response.data.Data);
                console.log(response)
                store.commit('setThreads', response.data.Data)
                return response.data.Data
            }) .catch((error) => {
                console.log(error)
                //if 401
                if (error.response.status === 401) {
                  // localStorage.clear()
                  // this.$router.push('/auth/login')
                }
              })
    },
    async getThreadsParam(store, param) {
        let url = '/api/threads/' + param;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        await axios.get(url, { headers: headers })
            .then(response => {
                // console.log(response.data.Data);
                console.log(response)
                store.commit('setThreads', response.data.Data)
                return response.data.Data
            }) .catch((error) => {
                console.log(error)
                //if 401
                if (error.response.status === 401) {
                  // localStorage.clear()
                  // this.$router.push('/auth/login')
                }
              })
    }
}