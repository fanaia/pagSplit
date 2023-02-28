import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AutenticacaoScreen from '../screens/AutenticacaoScreen';
import PagamentoNavigator from './PagamentoNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AutenticacaoScreen"
                component={AutenticacaoScreen}
            />
            <Stack.Screen
                name="PagamentoNavigator"
                component={PagamentoNavigator}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
