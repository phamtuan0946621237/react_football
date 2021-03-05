import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../module/container/MatchPage'
import MatchDetailPage from '../module/container/MatchDetailPage'
import ClubPage from '../module/container/ClubPage'
import PlayerPage from '../module/container/Player'
import {Platform, View} from 'react-native'
const Stack = createStackNavigator();


export const matchRoute = 'MatchRoute';
export const matchDetailRoute = 'MatchDetailRoute';
export const leagueRoute = 'LeagueRoute';
export const clubRoute = 'ClubRoute';
export const playerRoute = 'PlayerRoute';
function MacthStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={matchRoute}
    headerMode = "screen"
    
    >
      <Stack.Screen  key={matchRoute} name={matchRoute} component={MatchPage} options={{title : "Match"}}/>
      <Stack.Screen key={matchDetailRoute} name={matchDetailRoute} component={MatchDetailPage} options={{title : "Match Detail"}}/>
      <Stack.Screen key={clubRoute} name={clubRoute} component={ClubPage} options={{title : "Club"}}/>
      <Stack.Screen key={playerRoute} name={playerRoute} component={PlayerPage} options={{title : "PLayer"}}/>
    </Stack.Navigator>
  );
}

export default MacthStack

export const ScreenOptions: StackNavigationOptions = {
    headerTintColor: "white",
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      paddingHorizontal: 16
    },
    headerLeftContainerStyle: {
      paddingHorizontal: Platform.OS == 'ios' ? 16 : 0,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 16,
    },
    headerStyle: {
      backgroundColor: '#7C8DA3',
      shadowColor: 'transparent',
      elevation: 0,
    },
  };

  // rgb(124,141,163)
  