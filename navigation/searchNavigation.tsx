import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import SearchPage from '../module/container/SearchPage';
// import ClubPage from '../module/container/ClubPage'
import MatchDetailPage from '../module/container/MatchDetailPage'
import ClubPage from '../module/container/ClubPage'
import PlayerPage from '../module/container/Player'
import LeagueDetailPage from '../module/container/LeagueDetail'
const Stack = createStackNavigator();

export const searchRoute = 'SearchRoute';
export const matchDetailRoute = 'MatchDetailRoute';
export const clubRoute = 'ClubRoute';
export const playerRoute = 'PlayerRoute';
export const leagueDetailRoute = 'LeagueDetailRoute';
function SearchStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={searchRoute}
    >
      <Stack.Screen  key={searchRoute} name={searchRoute} component={SearchPage} options={{title : "Search"}}/>
      <Stack.Screen key={matchDetailRoute} name={matchDetailRoute} component={MatchDetailPage} options={{title : "Match Detail"}}/>
      <Stack.Screen key={clubRoute} name={clubRoute} component={ClubPage} options={{title : "Club"}}/>
      <Stack.Screen key={playerRoute} name={playerRoute} component={PlayerPage} options={{title : "PLayer"}}/>
      <Stack.Screen  key={leagueDetailRoute} name={leagueDetailRoute} component={LeagueDetailPage} options={{title : "League Detail"}}/>
    </Stack.Navigator>
  );
}

export default SearchStack

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
  