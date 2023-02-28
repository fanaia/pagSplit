import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AutenticacaoScreen from '../screens/AutenticacaoScreen';
import PagamentoNavigator from './PagamentoNavigator';
import ConfiguracaoScreen from '../screens/ConfiguracaoScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="AutenticacaoScreen"
                    component={AutenticacaoScreen}
                />
                <Stack.Screen
                    name="PagamentoNavigator"
                    component={PagamentoNavigator}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                    name="ConfiguracaoScreen"
                    component={ConfiguracaoScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AppNavigator;
