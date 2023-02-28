import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AutenticacaoProvider} from './src/contexts/AutenticacaoContext';
import AppNavigator from './src/navigation/AppNavigator';
import RootStackScreen from './src/screens/RootStackScreen';

export default function App() {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
    // return (
    //     <NavigationContainer><AutenticacaoProvider>
    //         <AppNavigator />
    //     </AutenticacaoProvider>
    //</NavigationContainer>
    // );
}
