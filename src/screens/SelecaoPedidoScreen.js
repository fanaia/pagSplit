import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AutenticacaoContext} from '../contexts/AutenticacaoContext';
import TipoPedido from '../components/TipoPedido';

const SelecaoPedidoScreen = () => {
    const navigation = useNavigation();

    const {usuarioAutenticado} = useContext(AutenticacaoContext);
    const [tipoPedido, setTipoPedido] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');

    // console.log(usuarioAutenticado);

    function handleAvancar() {
        navigation.navigate('ScreenInformacaoPedido', {
            tipoPedido: tipoPedido,
            numeroPedido: numeroPedido,
        });
    }

    return (
        <View>
            <View>
                <Text>Pedido</Text>
                <TipoPedido
                    tipoPedido={tipoPedido}
                    setTipoPedido={setTipoPedido}
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

export default SelecaoPedidoScreen;
