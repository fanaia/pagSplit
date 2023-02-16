import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function Pagamento() {
    const navigation = useNavigation();

    return <>
        <Text>Pagamento</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('SelecaoTipoPagamento')}
        >
            <Text>Tipo Pagamento</Text>
        </TouchableOpacity>
    </>
}