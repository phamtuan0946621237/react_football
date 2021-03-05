import React from 'react';
import { Text, View, Image ,Platform,StyleSheet,Dimensions} from 'react-native';
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
            <BottomTab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: "#000000",
                    inactiveTintColor: "#000000",
                    style: {
                        backgroundColor: '#7C8DA3',
                        },
                }}
            >
                <BottomTab.Screen name="MacthStack" component={MacthStack} options={{
                    tabBarLabel: "Match",
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? 
                        <Image source={require('../assest/outHome.png')} style={{ width: 24, height: 24 }} /> : 
                        <Image source={require('../assest/inHome.png')} style={{ width: 24, height: 24 }} />
                        )
                    }
                }} />
                <BottomTab.Screen name="LeagueStack" component={LeagueStack} options={{
                    title: "League",
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? 
                        <Image source={require('../assest/outLeague.png')} style={{ width: 24, height: 24 }} /> : 
                        <Image source={require('../assest/inLeague.png')} style={{ width: 24, height: 24 }} />
                        )
                    }
                }}
                />
                <BottomTab.Screen name="SearchStack" component={SearchStack}

                    options={{
                        // title: "Search",
                        // showLabel: false,
                        tabBarIcon: () => {
                            return (
                                <View style={{ position: 'absolute', top: -40, width: 80, height: 80, backgroundColor: 'white', borderRadius: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth : 10,borderColor : '#7C8DA3' }}>
                                    <Image source={require('../assest/inSearch.png')} style={{ width: 28, height: 28 }} />
                                </View>
                            )
                        }
                    }} />
                <BottomTab.Screen name="NewsStack" component={NewsStack} options={{
                    title: "News",
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? 
                        <Image source={require('../assest/outNews.png')} style={{ width: 24, height: 24 }} /> : 
                        <Image source={require('../assest/inNews.png')} style={{ width: 24, height: 24 }} />
                        )
                    }
                }} />
                <BottomTab.Screen name="AboutUsStack" component={AboutUsStack} options={{
                    title: "AboutUs",
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? 
                        <Image source={require('../assest/outAccount.png')} style={{ width: 24, height: 24 }} />
                        : <Image source={require('../assest/inAccount.png')} style={{ width: 24, height: 24 }} />
                        )
                    }
                }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default TabbarNavigation
