import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../module/container/MatchPage'
import LeaguePage from '../module/container/LeaguePage'
import {Platform} from 'react-native'
const Stack = createStackNavigator();


export const matchRoute = 'MatchRoute';
export const leagueRoute = 'LeagueRoute';

function MacthStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={matchRoute}
    >
      <Stack.Screen  key={matchRoute} name={matchRoute} component={MatchPage} options={{title : "Match"}}/>
      <Stack.Screen key={leagueRoute} name={leagueRoute} component={LeaguePage} options={{title : "League"}}/>
    </Stack.Navigator>
  );
}

export default MacthStack

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
  