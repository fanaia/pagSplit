import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Autenticacao from "../telas/Autenticacao";
import PagamentoRotas from "./PagamentoRotas";

const Stack = createNativeStackNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Autenticacao' component={ Autenticacao } />
            <Stack.Screen name='PagamentoRotas' component={ PagamentoRotas } />
        </Stack.Navigator>
    </NavigationContainer>
}