import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Autenticar} from '../services/AutenticacaoService';
import {AutenticacaoContext} from '../contexts/AutenticacaoContext';

const AutenticacaoScreen = () => {
    const navigation = useNavigation();
    const {setUsuarioAutenticado} = useContext(AutenticacaoContext);

    const [chaveAcesso, setChaveAcesso] = useState('');

    const handleAutenticar = async () => {
        const resultado = await Autenticar(chaveAcesso);

        if (resultado.statusCode === 200) {
            setUsuarioAutenticado(resultado.dados);
            navigation.navigate('PagamentoNavigator');
        } else {
            setUsuarioAutenticado({});
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
