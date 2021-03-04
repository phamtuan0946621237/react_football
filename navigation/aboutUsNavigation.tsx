import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import AboutUsPage from '../module/container/AboutUs';

const Stack = createStackNavigator();

export const leagueRoute = 'LeagueRoute';
export const leagueDetailRoute = 'LeagueDetailRoute';
export const clubRoute = 'ClubRoute';
export const matchDetailRoute = 'MatchDetailRoute';
export const aboutUsRoute = 'AboutUsRoute';
function AboutUsStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={aboutUsRoute}
    >
      <Stack.Screen  key={aboutUsRoute} name={aboutUsRoute} component={AboutUsPage} options={{title : "News"}}/>
    </Stack.Navigator>
  );
}

export default AboutUsStack

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
    backgroundColor: 'rgba(255,145,173,0.7)',
    shadowColor: 'transparent',
    elevation: 0,
  },
};