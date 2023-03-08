import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Alert, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GerarFatura, ConsultarFatura} from '../services/PagamentoService';

// import { Container } from './styles';

const PagamentoPixScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const pedido = route.params?.pedido;
    const valorPagamento = route.params?.valorPagamento;

    const [fatura, setFatura] = useState('');
    const [consultandoStatus, setConsultandoStatus] = useState(0);
    const [status, setStatus] = useState('pending');

    const gerarFatura = async () => {
        const resultado = await GerarFatura(
            pedido.IDPedido,
            'pix',
            valorPagamento,
        );

        if (resultado.statusCode === 200) {
            setFatura(resultado.dados);
            setStatus(resultado.dados.status);
            setConsultandoStatus(1);
        } else {
            Alert.alert('Erro ao gerar a fatura!');
        }
    };

    const consultarStatus = async () => {
        if (fatura.id && consultandoStatus > 0) {
            const resultado = await ConsultarFatura(fatura.id);

            if (resultado.statusCode === 200) {
                setStatus(resultado.dados.status);

                if (status === 'pending') {
                    setConsultandoStatus(consultandoStatus + 1);
                } else if (status === 'paid' || status === 'externally_paid') {
                    navigation.navigate('PagamentoConfirmadoScreen');
                } else {
                    navigation.navigate('PagamentoErroScreen');
                }
            }
        }
    };

    useEffect(() => {
        gerarFatura();
    }, []);

    useEffect(() => {
        consultarStatus();
    }, [consultandoStatus]);

    return (
        <View>
            <Text>Pagamento PIX</Text>
            <Text>ID Fatura: {fatura.id}</Text>
            <Text>Status: {status}</Text>
            {fatura && fatura.pix.qrcode ? (
                <Image style={styles.image} source={{uri: fatura.pix.qrcode}} />
            ) : (
                <Text>Gerando QRCode...</Text>
            )}
            <Button
                onPress={() => consultarStatus()}
                title="Atualizar Status"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default PagamentoPixScreen;
