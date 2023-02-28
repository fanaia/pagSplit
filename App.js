import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AutenticacaoProvider} from './src/contexts/AutenticacaoContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <AutenticacaoProvider>
                <AppNavigator />
            </AutenticacaoProvider>
        </NavigationContainer>
    );
}
