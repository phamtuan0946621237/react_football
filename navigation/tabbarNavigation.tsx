import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MatchPage from '../module/container/matchPage'
import MacthStack from './MacthRoute'
const TabbarNavigation = () => {

    function SettingsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }

    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name="MacthStack" component={MacthStack} />
                <BottomTab.Screen name="Settings" component={SettingsScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default TabbarNavigation