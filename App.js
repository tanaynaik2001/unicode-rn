/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Navigator from './navigations/Navigator';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
//   });
// };
export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }
  return <Navigator />;
}

const styles = StyleSheet.create({});
