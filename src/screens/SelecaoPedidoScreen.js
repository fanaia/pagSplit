import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AutenticacaoContext} from '../contexts/AutenticacaoContext';
import SelecionaPedido from '../components/SelecionaPedido';

const SelecaoPedidoScreen = () => {
    const navigation = useNavigation();

    const {usuarioAutenticado} = useContext(AutenticacaoContext);
    const [pedidoSelecionado, setPedidoSelecionado] = useState({});

    const handleSelecionaPedido = pedido => {
        setPedidoSelecionado(pedido);
    };

    function handleAvancar() {
        navigation.navigate('ScreenInformacaoPedido');
    }

    return (
        <View>
            <View>
                <Text>Pedido</Text>
                <SelecionaPedido onSelecionaPedido={handleSelecionaPedido} />
            </View>
            <View>
                <Text>
                    Tipo do pedido selecionado: {pedidoSelecionado.tipoPedido}
                </Text>
                <Text>
                    Número da mesa/comanda:{' '}
                    {pedidoSelecionado.numeroMesaComanda}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleAvancar}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SelecaoPedidoScreen;
