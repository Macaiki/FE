import axios from 'axios';
export default {
    handleRegister(store, param) {
        let url = '/api/register';
        axios.post(url, param)
            .then(response => {
                if(response.data.Meta.code === 200 && response.data.Meta.message === 'OK') {
                    this.$router.push('/');
                }
            })
    }
}