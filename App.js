/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Keyboard,
  Text,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

const App = () => {
  const [depth, setDepth] = React.useState('');
  const [angle, setAngle] = React.useState('');
  const [theoryDepth, setTheoryDepth] = React.useState('');

  const pressed = () => {
    console.log(depth + angle);
    setTheoryDepth(depth + angle);
  };
  const cleared = () => {
    setDepth('');
    setAngle('');
    setTheoryDepth('');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View
          style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>Reelingg</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text style={{width: 100}}>Depth ( in Feets )</Text>
            <TextInput
              keyboardType="numeric"
              type="number"
              placeholder="Depth"
              value={depth}
              onChangeText={(text) => {
                setTheoryDepth('');
                setDepth(parseInt(text));
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text style={{width: 100}}>Angle ( Degrees )</Text>
            <TextInput
              keyboardType="numeric"
              type="text"
              pattern="[0-9]*"
              placeholder="Angle"
              value={angle}
              onChangeText={(text) => {
                setTheoryDepth('');
                setAngle(parseInt(text));
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={pressed}>
              <Text>Calculate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cleared}>
              <Text>Clear All</Text>
            </TouchableOpacity>
          </View>
          {/*eof*/}
          <View style={{flex: 1, borderWidth: 1, alignItems: 'center'}}>
            <Text>Theoritical Depth</Text>
            <Text>{theoryDepth}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
export default App;
