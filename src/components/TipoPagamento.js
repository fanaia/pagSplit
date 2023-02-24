import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TipoPagamento = () => {
    const [selected, setSelected] = useState('Mesa');

    const handleChange = value => {
        setSelected(value);
    };

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={selected === 'pix' && estilos.botaoSelecionado}
                    onPress={() => handleChange('pix')}>
                    <Text>PIX</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={selected === 'debito' && estilos.botaoSelecionado}
                    onPress={() => handleChange('debito')}>
                    <Text>Débito</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={selected === 'credito' && estilos.botaoSelecionado}
                    onPress={() => handleChange('credito')}>
                    <Text>Crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={selected === 'dinheiro' && estilos.botaoSelecionado}
                    onPress={() => handleChange('dinheiro')}>
                    <Text>Dinheiro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    botaoSelecionado: {
        backgroundColor: '#CCC',
    },
});

export default TipoPagamento;
