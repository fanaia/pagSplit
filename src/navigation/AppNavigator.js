import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AutenticacaoScreen from '../screens/AutenticacaoScreen';
import PagamentoNavigator from './PagamentoNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
};

export default AppNavigator;
