import React from 'react';
import { Text, View, Image } from 'react-native';
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
                <BottomTab.Screen name="MacthStack" component={MacthStack} options={{
                    tabBarLabel: "Match",
                    // tabBarIcon: () => {
                    //     return <Image source={{ uri: "https://previews.123rf.com/images/savanno/savanno1803/savanno180300064/96881181-home-icon-white-silhouette-on-blue-round-background.jpg" }} style={{ width: 24, height: 24, marginRight: 4 }} />
                    // }
                }} />
                <BottomTab.Screen name="LeagueStack" component={LeagueStack} options={{
                    title: "League",
                    // tabBarIcon: () => {
                    //     return <Image source={{ uri: "https://www.vippng.com/png/detail/245-2453567_email-university-interscholastic-league-electronic-twitter-circle-logo.png" }} style={{ width: 24, height: 24, marginRight: 4, marginTop: 2 }} />
                    // }
                }}
                />
                <BottomTab.Screen name="SearchStack" component={SearchStack} options={{
                    title: "Search",
                    // tabBarIcon: () => {
                    //     return <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-4/177800/154-512.png" }} style={{ width: 21, height: 21, marginRight: 4, marginTop: 0 }} />
                    // }
                }} />
                <BottomTab.Screen name="NewsStack" component={NewsStack} options={{
                    title: "News",
                    // tabBarIcon: () => {
                    //     return <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/45-512.png" }} style={{ width: 21, height: 21, marginRight: 4, marginTop: 0 }} />
                    // }
                }} />
                <BottomTab.Screen name="AboutUsStack" component={AboutUsStack} options={{ 
                    title: "AboutUs",
                // tabBarIcon: () => {
                //     return <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png" }} style={{ width: 21, height: 21, marginRight: 4, marginTop: 0 }} />
                // }
            }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default TabbarNavigation