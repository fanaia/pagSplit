import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Autenticar} from '../services/autenticacaoService';
import {AutenticacaoContext} from '../contexts/AutenticacaoContext';

const AutenticacaoScreen = () => {
    const navigation = useNavigation();
    const {setUsuarioAutenticado} = useContext(AutenticacaoContext);

    const [chaveAcesso, setChaveAcesso] = useState('');

    const handleAutenticar = async () => {
        const resultado = await Autenticar(chaveAcesso);

        console.log(resultado);

        if (resultado.hasOwnProperty('idUsuario')) {
            setUsuarioAutenticado(resultado);
            navigation.navigate('PagamentoNavigator');
        } else {
            console.log('erro autenticacao');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Digite a Chave de Acesso"
                onChangeText={setChaveAcesso}
                keyboardType="numeric"
                maxLength={6}
            />
            <Button title="Autenticar" onPress={handleAutenticar} />
        </View>
    );
};

export default AutenticacaoScreen;
