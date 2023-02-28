import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native/Libraries/Alert/Alert';

const ConfiguracaoScreen = () => {
    const navigation = useNavigation();

    const [ip, setIp] = useState('');
    const [ipInicial, setIpInicial] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('ip').then(value => {
            if (value) {
                setIpInicial(value);
                setIp(value);
            }
        });
    }, []);

    const handleSalvar = async () => {
        try {
            await AsyncStorage.setItem('ip', ip);
            console.log('IP salvo com sucesso!');
        } catch (error) {
            console.log('Erro ao salvar configuracao: ', error);
        }

        navigation.goBack();
    };

    return (
        <View>
            <Text>Configuracao</Text>
            <Text>API</Text>
            <TextInput
                placeholder="Digite o IP da API da PDV7"
                value={ip}
                onChangeText={setIp}
            />
            <Button onPress={handleSalvar} title="Salvar Configurações" />
        </View>
    );
};

export default ConfiguracaoScreen;
