import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../module/container/MatchPage'
// import LeaguePage from '../module/container/LeaguePage'
import MatchDetailPage from '../module/container/MatchDetailPage'
import ClubPage from '../module/container/ClubPage'
import {Platform} from 'react-native'
import LeaguePage from '../module/container/League'
import LeagueDetailPage from '../module/container/LeagueDetail'
import PlayerPage from '../module/container/Player'
// import ClubPage from '../module/container/ClubPage'

const Stack = createStackNavigator();

export const leagueRoute = 'LeagueRoute';
export const leagueDetailRoute = 'LeagueDetailRoute';
export const clubRoute = 'ClubRoute';
export const matchDetailRoute = 'MatchDetailRoute';
export const playerRoute = 'PlayerRoute';
function LeagueStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={leagueRoute}
    >
      <Stack.Screen  key={leagueRoute} name={leagueRoute} component={LeaguePage} options={{title : "League"}}/>
      <Stack.Screen  key={leagueDetailRoute} name={leagueDetailRoute} component={LeagueDetailPage} options={{title : "League Detail"}}/>
      <Stack.Screen key={clubRoute} name={clubRoute} component={ClubPage} options={{title : "Club"}}/>
      <Stack.Screen key={matchDetailRoute} name={matchDetailRoute} component={MatchDetailPage} options={{title : "Match Detail"}}/>
      <Stack.Screen key={playerRoute} name={playerRoute} component={PlayerPage} options={{title : "PLayer"}}/>
    </Stack.Navigator>
  );
}

export default LeagueStack

export const ScreenOptions: StackNavigationOptions = {
    // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    headerTintColor: "black",
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      paddingHorizontal: 16
    },
    // headerBackground : 'white',
    headerLeftContainerStyle: {
      paddingHorizontal: Platform.OS == 'ios' ? 16 : 0,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 16,
    },
    
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      elevation: 0,
    },
  };
  