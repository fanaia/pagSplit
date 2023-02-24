import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import TipoPedido from '../components/TipoPedido';
import UsuarioAutenticado from '../contexts/usuario';

const SelecaoPedidoScreen = () => {
    const navigation = useNavigation();
    const usuarioAutenticado = useContext(UsuarioAutenticado);

    console.log(usuarioAutenticado);

    const [tipoPedido, setTipoPedido] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');

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
                {/* <Text>{usuarioAutenticado.nome}</Text> */}
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
