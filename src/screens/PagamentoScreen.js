import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import TipoPagamento from '../components/TipoPagamento';
import {useNavigation, useRoute} from '@react-navigation/native';

// import { Container } from './styles';

const PagamentoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const pedido = route.params?.pedido;

    const [valorPagamento, setValorPagamento] = useState('0,00');

    function handleAvancar() {
        navigation.navigate('ScreenPagamentoPix');
    }

    return (
        <View>
            <Text>Pagamanto</Text>
            <Text>Pedido: {pedido.IDPedido}</Text>
            <Text>
                {pedido.IDTipoPedido === 10
                    ? `Mesa ${pedido.NumeroMesa}`
                    : pedido.IDTipoPedido === 20
                    ? `Comanda ${pedido.NumeroComanda}`
                    : 'Balcão'}
            </Text>
            <View>
                <TipoPagamento />

                <TextInput
                    placeholder="R$ 0,00"
                    value={valorPagamento}
                    onChangeText={setValorPagamento}
                    keyboardType="number-pad"
                    maxLength={9}
                />
            </View>
            <View>
                <TouchableOpacity onPress={handleAvancar}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PagamentoScreen;
