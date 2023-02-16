import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmacaoPagamento() {
    const navigation = useNavigation();

    return <>
        <Text>ConfirmacaoPagamento</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Pagamento')}
        >
            <Text>Novo pagamento</Text>
        </TouchableOpacity>
    </>
}