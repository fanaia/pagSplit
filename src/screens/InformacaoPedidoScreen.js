import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const InformacaoPedidoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const pedido = route.params?.pedido;

    function handleAvancar() {
        navigation.navigate('PagamentoScreen', {pedido: pedido});
    }

    return (
        <View>
            <Text>Informacao Pedido</Text>
            <View>
                <Text>Pedido: {pedido.IDPedido}</Text>
                <Text>
                    {pedido.IDTipoPedido === 10
                        ? `Mesa ${pedido.NumeroMesa}`
                        : pedido.IDTipoPedido === 20
                        ? `Mesa ${pedido.NumeroComanda}`
                        : 'Balcão'}
                </Text>
                <Text>{pedido.Nome}</Text>
                <Text>Qtd itens: {pedido.Itens.length}</Text>
                <Text>Total: R$ {pedido.ValorTotal}</Text>
                <Text>Pago: -</Text>
                <Text>Pendente: -</Text>
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
