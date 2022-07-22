export default {
  getNotification(store, param) {
    axios.get('/api/notification/' + param)
      .then(response => {
        store.commit('setNotification', response.data.Data)
      }).catch(error => {
        console.log(error)
      })
  }
}
