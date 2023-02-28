import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getApi() {
    const ip = await AsyncStorage.getItem('ip');
    const Api = axios.create({
        baseURL: ip,
    });

    return Api;
}

export default getApi;
