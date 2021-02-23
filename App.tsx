/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './redux/configStore';



import TabbarNavigation from './navigation/tabbarNavigation'
const App: () => React$Node = () => {

  return (
    <Provider store={store}>
      <TabbarNavigation />
      </Provider>
  );
};


export default App;
