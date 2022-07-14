import axios from 'axios';
export default {
    handleRegister(store, param) {
        let url = 'http://108.136.47.34:8080/api/v1/register';
        axios.post(url, param)
            .then(response => {
                if(response.data.Meta.code === 200 && response.data.Meta.message === 'OK') {
                    this.$router.push('/');
                }
            })
    }
}