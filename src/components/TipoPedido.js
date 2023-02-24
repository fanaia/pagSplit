import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

const TipoPedido = () => {
    const [selected, setSelected] = useState('mesa');
    const [mesaComanda, setMesaComanda] = useState('');

    const handleChange = value => {
        setSelected(value);

        if (value === 'mesa' || value === 'comanda') {
            setMesaComanda('');
        }
    };

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={selected === 'mesa' && estilos.botaoSelecionado}
                    onPress={() => handleChange('mesa')}>
                    <Text>Mesa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={selected === 'comanda' && estilos.botaoSelecionado}
                    onPress={() => handleChange('comanda')}>
                    <Text>Comanda</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={selected === 'balcao' && estilos.botaoSelecionado}
                    onPress={() => handleChange('balcao')}>
                    <Text>Balcão</Text>
                </TouchableOpacity>
            </View>

            {(selected === 'mesa' || selected === 'comanda') && (
                <View>
                    <TextInput
                        placeholder="Número da Mesa/Comanda"
                        value={mesaComanda}
                        onChangeText={setMesaComanda}
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

export default TipoPedido;
