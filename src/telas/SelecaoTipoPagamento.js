import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function SelecaoTipoPagamento() {
    const navigation = useNavigation();

    return <>
        <Text>Selecionar tipo de Pagamento</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('PagamentoPix')}
        >
            <Text>Pagamento Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('PagamentoCredito')}
        >
            <Text>Pagamento Crédito</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('PagamentoDebito')}
        >
            <Text>Pagamento Débito</Text>
        </TouchableOpacity>
    </>
}