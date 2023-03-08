import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SelecaoPedidoScreen from '../screens/SelecaoPedidoScreen';
import InformacaoPedidoScreen from '../screens/InformacaoPedidoScreen';
import PagamentoScreen from '../screens/PagamentoScreen';
import PagamentoPixScreen from '../screens/PagamentoPixScreen';
import PagamentoCartaoScreen from '../screens/PagamentoCreditoScreen';
import PagamentoDinheiroScreen from '../screens/PagamentoDinheiroScreen';
import PagamentoConfirmadoScreen from '../screens/PagamentoConfirmadoScreen';
import PagamentoErroScreen from '../screens/PagamentoErroScreen';

const Stack = createNativeStackNavigator();

const PagamentoNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SelecaoPedidoScreen"
                component={SelecaoPedidoScreen}
            />
            <Stack.Screen
                name="InformacaoPedidoScreen"
                component={InformacaoPedidoScreen}
            />
            <Stack.Screen name="PagamentoScreen" component={PagamentoScreen} />
            <Stack.Screen
                name="PagamentoPixScreen"
                component={PagamentoPixScreen}
            />
            <Stack.Screen
                name="PagamentoCartaoScreen"
                component={PagamentoCartaoScreen}
            />
            <Stack.Screen
                name="PagamentoDinheiroScreen"
                component={PagamentoDinheiroScreen}
            />
            <Stack.Screen
                name="PagamentoConfirmadoScreen"
                component={PagamentoConfirmadoScreen}
            />
            <Stack.Screen
                name="PagamentoErroScreen"
                component={PagamentoErroScreen}
            />
        </Stack.Navigator>
    );
};

export default PagamentoNavigator;
