import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

const SelecionaPedido = ({onSelecionaPedido}) => {
    const [tipoPedido, setTipoPedido] = useState();
    const [numeroMesaComanda, setNumeroMesaComanda] = useState('');

    const handleTipoPedido = tipo => {
        setTipoPedido(tipo);
        onSelecionaPedido({tipoPedido: tipo, numeroMesaComanda});
    };

    const handleNumeroMesaComanda = numero => {
        setNumeroMesaComanda(numero);
        onSelecionaPedido({tipoPedido, numeroMesaComanda: numero});
    };

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={tipoPedido === 10 && estilos.botaoSelecionado}
                    onPress={() => handleTipoPedido(10)}>
                    <Text>Mesa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tipoPedido === 20 && estilos.botaoSelecionado}
                    onPress={() => handleTipoPedido(20)}>
                    <Text>Comanda</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tipoPedido === 40 && estilos.botaoSelecionado}
                    onPress={() => handleTipoPedido(40)}>
                    <Text>Balcão</Text>
                </TouchableOpacity>
            </View>

            {(tipoPedido === 10 || tipoPedido === 20) && (
                <View>
                    <TextInput
                        placeholder="Número da Mesa/Comanda"
                        value={numeroMesaComanda}
                        onChangeText={handleNumeroMesaComanda}
                        keyboardType="number-pad"
                        maxLength={3}
                    />
                </View>
            )}
        </View>
    );
};

const estilos = StyleSheet.create({
    botaoSelecionado: {
        backgroundColor: '#CCC',
    },
});

export default SelecionaPedido;
