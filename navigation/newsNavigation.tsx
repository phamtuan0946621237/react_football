import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import NewsPage from '../module/container/News';

const Stack = createStackNavigator();

export const leagueRoute = 'LeagueRoute';
export const leagueDetailRoute = 'LeagueDetailRoute';
export const clubRoute = 'ClubRoute';
export const matchDetailRoute = 'MatchDetailRoute';
export const newsRoute = 'NewsRoute';
function NewsStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={newsRoute}
    >
      <Stack.Screen  key={newsRoute} name={newsRoute} component={NewsPage} options={{title : "News"}}/>
    </Stack.Navigator>
  );
}

export default NewsStack

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
  