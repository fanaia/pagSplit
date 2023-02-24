import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import UsuarioAutenticado from '../contexts/usuario';
import {Autenticar} from '../services/autenticacaoService';

const AutenticacaoScreen = () => {
    const navigation = useNavigation();
    const [chaveAcesso, setChaveAcesso] = useState('');

    // const [usuarioAutenticado, setUsuarioAutenticado] = useState({});

    const usuarioAutenticado = useContext(UsuarioAutenticado);

    const handleAutenticar = async () => {
        const resultado = await Autenticar(chaveAcesso);

        console.log(resultado.hasOwnProperty('idUsuario'));

        if (resultado.hasOwnProperty('idUsuario')) {
            usuarioAutenticado(resultado);
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
