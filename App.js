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
  Alert,
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
  Easing,
} from 'react-native';

const App = () => {
  const [depth, setDepth] = React.useState('');
  const [angle, setAngle] = React.useState('');
  const [theoryDepth, setTheoryDepth] = React.useState('');

  function toDegrees(radians) {
    return radians * (180 / Math.PI);
  }
  const pressed = () => {
    let answer = 0;

    if (depth > 0 && angle >= 0 && angle < 91) {
      answer = depth / Math.cos(toDegrees(angle));
      setTheoryDepth(answer + ' Feet(s)');
    }
    if (depth === '' || depth < 0) {
      Alert.alert('Check the Depth', 'Depth should be higher than 0 feet');
    } else if (angle === '' || angle > 90) {
      Alert.alert('Check the Angle', 'Angle should be in between 0 and 90');
    }
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              justifyContent: 'space-evenly',
            }}>
            <Text style={{width: 150}}>Actual Depth (in Feet(s)</Text>
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
              justifyContent: 'space-evenly',
            }}>
            <Text style={{width: 150}}>Angle ( Degrees )</Text>
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
