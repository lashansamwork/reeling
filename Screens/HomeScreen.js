/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Alert, SafeAreaView, View, Image} from 'react-native';
import {Layout, Text, Card, Input, Button} from '@ui-kitten/components';

const Logo = require('../assets/logo-01.png');
const HomeScreen = () => {
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

  return (
    <Layout level="3" style={{flex: 1, paddingHorizontal: 20}}>
      <SafeAreaView>
        <View style={{paddingTop: 20}} />
        <Card style={{alignItems: 'center'}}>
          <View style={{aspectRatio: 2292 / 1542, height: 100}}>
            <Image
              source={Logo}
              style={{
                height: null,
                width: null,
                flex: 1,
                transform: [{scale: 3}],
              }}
              resizeMode="center"
            />
          </View>
        </Card>
        <View style={{paddingTop: 20}} />
        <Card style={{alignItems: 'center'}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
            <Text category="s1" style={{width: '35%'}}>
              Actual Depth
            </Text>
            <Input
              style={{flex: 1}}
              status="success"
              value={depth}
              placeholder="Feet(s)"
              onChangeText={(text) => {
                setTheoryDepth('');
                setDepth(parseInt(text));
              }}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingTop: 10,
            }}>
            <Text category="s1" style={{width: '35%'}}>
              Angle
            </Text>
            <Input
              style={{flex: 1}}
              value={angle}
              status="success"
              placeholder="Degree(s)"
              keyboardType="numeric"
              pattern="[0-9]*"
              onChangeText={(text) => {
                setTheoryDepth('');
                setAngle(parseInt(text));
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingTop: 20,
            }}>
            <Button
              appearance="ghost"
              status="info"
              style={{flex: 1}}
              onPress={cleared}>
              Clear All
            </Button>
            <View style={{padding: 20}} />
            <Button status="success" style={{flex: 1}} onPress={pressed}>
              Calculate
            </Button>
          </View>
        </Card>
        <View style={{paddingTop: 20}} />
        <Card style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text category="s1">Theoritical Depth : </Text>
            <Text category="h4">{theoryDepth}</Text>
          </View>
        </Card>
      </SafeAreaView>
    </Layout>
  );
};

export default HomeScreen;
