import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.1.21:7777',
});

export default Api;
