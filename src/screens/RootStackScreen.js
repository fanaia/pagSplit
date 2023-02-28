import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Button, Text} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details</Text>
        </View>
    );
}

function ModalScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

const RootStack = createStackNavigator();

export default function RootStackScreen() {
    return <Text>teste modal</Text>;

    // return (
    //     <RootStack.Navigator>
    //         <RootStack.Group>
    //             <RootStack.Screen name="Home" component={HomeScreen} />
    //             <RootStack.Screen name="Details" component={DetailsScreen} />
    //         </RootStack.Group>
    //         <RootStack.Group screenOptions={{presentation: 'modal'}}>
    //             <RootStack.Screen name="MyModal" component={ModalScreen} />
    //         </RootStack.Group>
    //     </RootStack.Navigator>
    // );
}
