/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex:1, flexDirection: 'column',  justifyContent: 'center'}}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text>Reelingg</Text>
        </View>
        <View
          style={{flex:1, flexDirection: 'row', borderWidth: 1, alignItems: 'center', }}>
          <Text>Depth ( in Feets )</Text>
          <TextInput placeholder="Depth" />
        </View>
        <View
          style={{flex:1, flexDirection: 'row', borderWidth: 1, alignItems: 'center'}}>
          <Text>Angle ( Degrees )</Text>
          <TextInput placeholder="Angle" />
        </View>
        <View>
          <Button title="Calculate" />
        </View>
        {/*eof*/}
        <View style={{flex:1, borderWidth: 1, alignItems: 'center'}}>
          <Text>Theoritical Depth</Text>
          <Text>Answer</Text>
        </View>
    </View>
  );
};

export default App;
