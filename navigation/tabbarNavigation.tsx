import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MacthStack from './navigation'
import LeagueStack from './leaguenavigation'
import SearchStack from './searchNavigation'
import NewsStack from './newsNavigation'
import AboutUsStack from './aboutUsNavigation'
const TabbarNavigation = () => {

    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name="MacthStack" component={MacthStack} options={{title : "Match"}}/>
                <BottomTab.Screen name="LeagueStack" component={LeagueStack} options={{title : "League"}}/>
                <BottomTab.Screen name="SearchStack" component={SearchStack} options={{title : "Search"}}/>
                <BottomTab.Screen name="NewsStack" component={NewsStack} options={{title : "News"}}/>
                <BottomTab.Screen name="AboutUsStack" component={AboutUsStack} options={{title : "AboutUs"}}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default TabbarNavigation