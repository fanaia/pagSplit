import React from 'react';

import {AutenticacaoProvider} from './src/contexts/AutenticacaoContext';
import AppNavigator from './src/navigation/AppNavigator';
import RootStackScreen from './src/screens/RootStackScreen';

export default function App() {
    return <RootStackScreen />;
    // return (
    //     <AutenticacaoProvider>
    //         <AppNavigator />
    //     </AutenticacaoProvider>
    // );
}
