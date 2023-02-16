import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/core';

export default function Autenticacao() {
    const navigation = useNavigation();

    return <>
        <Text>Autenticacao</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('PagamentoRotas')}
        >
            <Text>Ir para Pagamento</Text>
        </TouchableOpacity>
    </>
}