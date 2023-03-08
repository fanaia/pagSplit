import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PagamentoConfirmadoScreen = () => {
    const navigation = useNavigation();

    function VoltarTelaPagamento() {
        navigation.navigate('SelecaoPedidoScreen');
    }
    setTimeout(VoltarTelaPagamento, 5000);

    return (
        <View>
            <Text>Pagamento confirmado</Text>
        </View>
    );
};

export default PagamentoConfirmadoScreen;
