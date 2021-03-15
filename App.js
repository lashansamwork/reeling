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
  Image,
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
const Logo = require('./assets/Logo.png');
const App = () => {
  const [depth, setDepth] = React.useState('');
  const [angle, setAngle] = React.useState('');
  const [theoryDepth, setTheoryDepth] = React.useState('');

  function toRadians(degree) {
    return (degree * Math.PI) / 180;
  }
  const pressed = () => {
    let answer = 0;

    if (depth > 0 && (angle > 0 || angle === 0) && angle < 91) {
      answer = depth / Math.cos(toRadians(angle));
      setTheoryDepth(answer.toPrecision(4) + ' Feet(s)');
    }
    if (depth === '' || depth < 0) {
      Alert.alert('Check the Depth', 'Depth should be higher than 0 feet');
    } else if (angle === '' || angle > 90) {
      Alert.alert('Check the Angle', 'Angle should be in between 0 and 90');
    } else if (depth === 0) {
      setTheoryDepth('0 Feet');
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
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#D9D6D0',
          }}>
          <View
            style={{
              marginTop: 20,
              alignSelf: 'center',
              aspectRatio: 4 / 2,
              height: 100,
            }}>
            <Image
              source={Logo}
              resizeMode="stretch"
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              borderWidth: 1,
              margin: 10,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontWeight: 'bold', width: 140, flex: 2}}>
                Actual Depth
              </Text>
              <TextInput
                style={{
                  paddingLeft: 5,
                  height: 35,
                  flex: 2,
                  width: 100,
                  backgroundColor: 'white',
                }}
                keyboardType="numeric"
                placeholder="Depth"
                value={depth}
                onChangeText={(text) => {
                  setTheoryDepth('');
                  setDepth(parseInt(text));
                }}
              />
              <Text
                style={{
                  height: 35,
                  lineHeight: 35,
                  paddingHorizontal: 10,
                  width: 90,
                  color: 'grey',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                }}>
                Feet(s)
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontWeight: 'bold', width: 140, flex: 2}}>
                Angle
              </Text>
              <TextInput
                style={{
                  paddingLeft: 5,
                  height: 35,
                  flex: 2,
                  width: 100,
                  backgroundColor: 'white',
                }}
                keyboardType="numeric"
                pattern="[0-9]*"
                placeholder="Angle"
                value={angle}
                onChangeText={(text) => {
                  setTheoryDepth('');
                  setAngle(parseInt(text));
                }}
              />
              <Text
                style={{
                  height: 35,
                  lineHeight: 35,
                  paddingHorizontal: 10,
                  width: 90,
                  color: 'grey',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                }}>
                Degree(s)
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 37,
                  backgroundColor: '#83A603',
                  justifyContent: 'center',
                  marginTop: 10,
                  margin: 5,
                }}
                onPress={pressed}>
                <Text style={{textAlign: 'center'}}>Calculate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 37,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  margin: 5,
                }}
                onPress={cleared}>
                <Text style={{textAlign: 'center', justifyContent: 'center'}}>
                  Clear All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Text style={{padding: 10, fontWeight: 'bold'}}>
              Theoritical Depth
            </Text>
            <Text
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                width: 200,
                height: 50,
                lineHeight: 50,
                textAlign: 'center',
              }}>
              {theoryDepth}
            </Text>
          </View>
          <View style={{flexBasis: 20}} />
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
