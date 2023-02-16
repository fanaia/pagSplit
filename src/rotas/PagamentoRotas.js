import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagamento from "../telas/Pagamento";
import SelecaoTipoPagamento from "../telas/SelecaoTipoPagamento";
import PagamentoPix from "../telas/PagamentoPix";
import PagamentoCredito from "../telas/PagamentoCredito";
import PagamentoDebito from "../telas/PagamentoDebito";
import ConfirmacaoPagamento from "../telas/ConfirmacaoPagamento";

const Stack = createNativeStackNavigator();

export default function PagamentoRotas() {
    return <Stack.Navigator>
            <Stack.Screen name='Pagamento' component={ Pagamento } />
            <Stack.Screen name='SelecaoTipoPagamento' component={ SelecaoTipoPagamento } />
            <Stack.Screen name='PagamentoPix' component={ PagamentoPix } />
            <Stack.Screen name='PagamentoCredito' component={ PagamentoCredito } />
            <Stack.Screen name='PagamentoDebito' component={ PagamentoDebito } />
            <Stack.Screen name='ConfirmacaoPagamento' component={ ConfirmacaoPagamento } />
        </Stack.Navigator>
}