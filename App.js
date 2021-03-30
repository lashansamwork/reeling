/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import theme from './custom-theme.json';

const App = () => (
  <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;
