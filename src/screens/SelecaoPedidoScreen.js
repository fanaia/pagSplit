import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AutenticacaoContext} from '../contexts/AutenticacaoContext';
import SelecionaPedido from '../components/SelecionaPedido';
import {CarregarPedido} from '../services/PedidosService';

const SelecaoPedidoScreen = () => {
    const navigation = useNavigation();

    const {usuarioAutenticado} = useContext(AutenticacaoContext);
    const [pedidoSelecionado, setPedidoSelecionado] = useState({});

    const handleSelecionaPedido = pedido => {
        setPedidoSelecionado(pedido);
    };

    const handleAvancar = async () => {
        const resultado = await CarregarPedido(
            pedidoSelecionado.tipoPedido,
            pedidoSelecionado.numeroMesaComanda,
        );

        if (resultado.statusCode === 200) {
            navigation.navigate('InformacaoPedidoScreen', {
                pedido: resultado.dados,
            });
        } else {
            Alert.alert('Atenção', 'Pedido não encontrado!');
        }
    };

    return (
        <View>
            <View>
                <Text>Pedido</Text>
                <SelecionaPedido onSelecionaPedido={handleSelecionaPedido} />
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
