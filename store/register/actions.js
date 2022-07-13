import axios from 'axios';
export default {
    handleRegister(store, param) {
        let url = 'http://108.136.47.34:8080/api/v1/register';
        axios.post(url, param)
            .then(response => {
                console.log(response);
            })
    }
}