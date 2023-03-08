import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getApiPDV7() {
    const ip = await AsyncStorage.getItem('ip');
    const Api = axios.create({
        baseURL: ip,
    });

    return Api;
}

export async function getApiIugu() {
    const urlIugu = 'https://api.iugu.com/';
    const authorization =
        'Mjg3NzQxOUQ3NDUyNzhDN0NDRjc5QUZFQjQ3NDQ4NzRFMzQ4RDQwNjA3MEQ1MzM3Q0ZFQUVGOTgyNDEzQ0NBOA==';

    const headers = {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        body: JSON.stringify({ensure_workday_due_date: false}),
    };

    const Api = axios.create({
        baseURL: urlIugu,
        headers,
    });

    return Api;
}
