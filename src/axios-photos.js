import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-pictures-app-default-rtdb.firebaseio.com/'
});

export default instance;