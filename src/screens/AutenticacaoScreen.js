import React, {useState, useContext} from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
    ActivityIndicator,
    Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Autenticar} from '../services/AutenticacaoService';
import {AutenticacaoContext} from '../contexts/AutenticacaoContext';

const AutenticacaoScreen = () => {
    const navigation = useNavigation();
    const {setUsuarioAutenticado} = useContext(AutenticacaoContext);
    const [carregando, setCarregando] = useState(false);

    const [chaveAcesso, setChaveAcesso] = useState('');

    const handleAutenticar = async () => {
        setCarregando(true);

        const resultado = await Autenticar(chaveAcesso);

        if (resultado.statusCode === 200) {
            setUsuarioAutenticado(resultado.dados);
            navigation.navigate('PagamentoNavigator');
        } else {
            Alert.alert('Autenticação', 'Chave de acesso inválida!');
            setUsuarioAutenticado({});
        }

        setCarregando(false);
    };

    return (
        <View>
            <TextInput
                placeholder="Digite a Chave de Acesso"
                onChangeText={setChaveAcesso}
                keyboardType="numeric"
                maxLength={6}
            />
            {carregando ? (
                <ActivityIndicator />
            ) : (
                <Button title="Autenticar" onPress={handleAutenticar} />
            )}
            <View>
                <Button
                    onPress={() => navigation.navigate('ConfiguracaoScreen')}
                    title="Configuração"
                />
            </View>
        </View>
    );
};

export default AutenticacaoScreen;
