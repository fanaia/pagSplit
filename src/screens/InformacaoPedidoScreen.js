import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InformacaoPedidoScreen = () => {
    const navigation = useNavigation();

    function handleAvancar() {
        navigation.navigate('PagamentoScreen');
    }

    return (
        <View>
            <Text>Informacao Pedido</Text>
            <View>
                <Text>Comanda 102</Text>
                <Text>Fabio</Text>
                <Text>Qtd itens: 3</Text>
                <Text>Total: R$ 94,00</Text>
                <Text>Pago: R$ 24,00</Text>
                <Text>Pendente: R$ 70,00</Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleAvancar}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InformacaoPedidoScreen;
