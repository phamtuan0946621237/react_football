import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../module/container/matchPage'
import LeaguePage from '../module/container/LeaguePage'
import {Platform} from 'react-native'
const Stack = createStackNavigator();


export const matchRoute = 'MatchRoute';
export const leagueRoute = 'LeagueRoute';

function MacthStack() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    >
      <Stack.Screen key={matchRoute} name={matchRoute} component={MatchPage} options={{title : "Match"}}/>
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
    headerLeftContainerStyle: {
      paddingHorizontal: Platform.OS == 'ios' ? 16 : 0,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 16,
    },
    // headerBackImage: () => (
    //   <Image source={BackWhiteIcon} style={AppStyles.icon24} />
    // ),
    // headerBackground: () => <CommonGradient style={{ flex: 1 }} />,
    headerStyle: {
      backgroundColor: 'transparent',
      shadowColor: 'transparent',
      elevation: 0,
    },
  };
  