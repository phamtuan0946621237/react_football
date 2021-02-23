import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../module/container/matchPage'
import LeaguePage from '../module/container/LeaguePage'
const Stack = createStackNavigator();


// export const loginPage = 'login';


function MacthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MatchPage" component={MatchPage} />
      <Stack.Screen name="LeaguePage" component={LeaguePage} />
    </Stack.Navigator>
  );
}

export default MacthStack