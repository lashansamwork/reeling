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
      answer = depth * Math.cos(toRadians(angle));
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
  const PADDING = 10;
  const LINE_HEIGHT = 35;
  const LOGO_HEIGHT = 100;
  const LOGO_ASPECT_RATIO = 4 / 2;
  const LABEL_WIDTH = 100;
  const INPUT_WIDTH = 90;
  const INPUT_BG_COLOR = 'white';
  const ANSWER_WIDTH = 200;
  const CLEAR_BUTTON_BG = 'red';
  const CALCULATE_BUTTON_BG = '#83A603';
  const SUFFIX_COLOR = 'grey';
  const BACKGROUND_COLOR = '#D9D6D0';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: BACKGROUND_COLOR,
          }}>
          <View
            style={{
              marginTop: PADDING * 2,
              alignSelf: 'center',
              aspectRatio: LOGO_ASPECT_RATIO,
              height: LOGO_HEIGHT,
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
              margin: PADDING,
              padding: PADDING,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{flex: 2, fontWeight: 'bold', width: LOGO_ASPECT_RATIO}}>
                Actual Depth
              </Text>
              <TextInput
                style={{
                  flex: 2,
                  paddingLeft: PADDING / 2,
                  height: LINE_HEIGHT,
                  width: LABEL_WIDTH,
                  backgroundColor: INPUT_BG_COLOR,
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
                  height: LINE_HEIGHT,
                  lineHeight: LINE_HEIGHT,
                  paddingHorizontal: PADDING,
                  width: INPUT_WIDTH,
                  color: SUFFIX_COLOR,
                  fontWeight: 'bold',
                  backgroundColor: INPUT_BG_COLOR,
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
              <Text
                style={{fontWeight: 'bold', width: LOGO_ASPECT_RATIO, flex: 2}}>
                Angle
              </Text>
              <TextInput
                style={{
                  paddingLeft: PADDING / 2,
                  height: LINE_HEIGHT,
                  flex: 2,
                  width: LABEL_WIDTH,
                  backgroundColor: INPUT_BG_COLOR,
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
                  height: LINE_HEIGHT,
                  lineHeight: LINE_HEIGHT,
                  paddingHorizontal: PADDING,
                  width: INPUT_WIDTH,
                  color: 'grey',
                  fontWeight: 'bold',
                  backgroundColor: INPUT_BG_COLOR,
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
                  height: LINE_HEIGHT,
                  backgroundColor: CALCULATE_BUTTON_BG,
                  justifyContent: 'center',
                  marginTop: PADDING,
                  margin: PADDING / 2,
                }}
                onPress={pressed}>
                <Text style={{textAlign: 'center'}}>Calculate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: LINE_HEIGHT,
                  backgroundColor: CLEAR_BUTTON_BG,
                  justifyContent: 'center',
                  margin: PADDING / 2,
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
              margin: PADDING,
            }}>
            <Text style={{padding: PADDING, fontWeight: 'bold'}}>
              Theoritical Depth
            </Text>
            <Text
              style={{
                backgroundColor: INPUT_BG_COLOR,
                marginBottom: PADDING,
                width: ANSWER_WIDTH,
                height: ANSWER_WIDTH / 4,
                lineHeight: ANSWER_WIDTH / 4,
                textAlign: 'center',
              }}>
              {theoryDepth}
            </Text>
          </View>
          <View style={{flexBasis: PADDING * 2}} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default App;
