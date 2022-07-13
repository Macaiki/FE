import axios from 'axios';
export default {
    handleRegister(store, param) {
        let url = '/register';
        axios.post(url, param)
            .then(response => {
                console.log(response);
            })
    }
}