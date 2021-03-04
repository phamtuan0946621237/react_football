/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import ModalApp from 'react-native-modal';


import TabbarNavigation from './navigation/tabbarNavigation'

// export function showLoading() {
//   global.showLoading();
// }

// export function dismissLoading() {
//   global.dismissLoading();
// }

// export declare const global: {
//   showLoading: () => void | null;
//   dismissLoading: () => void | null;
// };

// const AppLoading = () => {
//   const [isShowLoading, setIsShowLoading] = useState<boolean>(false);
//   useEffect(() => {
//     global.showLoading = () => {
//       setIsShowLoading(true);
//     };
//     global.dismissLoading = () => {
//       setIsShowLoading(false);
//     };
//   }, []);

//   return (
//     <ModalApp isVisible={isShowLoading}>
//       <View >
//         <ActivityIndicator size="large" color={"white"} />
//       </View>
//     </ModalApp>
//   );
// };
const App = () => {

  return (
    <>
    <Provider store={store}>
      <TabbarNavigation />
      </Provider>
      </>
  );
};


export default App;
