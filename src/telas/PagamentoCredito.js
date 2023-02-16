import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function PagamentoCredito() {
    const navigation = useNavigation();

    return <>
        <Text>Pagamento</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('ConfirmacaoPagamento')}
        >
            <Text>Pagar</Text>
        </TouchableOpacity>
    </>
}