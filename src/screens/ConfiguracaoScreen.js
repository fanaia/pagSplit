import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ConfiguracaoScreen = () => {
    const navigation = useNavigation();

    const handleSalvar = async () => {
        navigation.goBack();
    };

    return (
        <View>
            <Text>Tela Configuracao</Text>
            <Button onPress={handleSalvar} title="Salvar Configurações" />
        </View>
    );
};

export default ConfiguracaoScreen;
