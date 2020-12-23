/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './pages/SplashScreen';
import Label from './pages/components/atoms/Label';
import InputText from './pages/components/atoms/InputText';
import InputTextWithIcon from './pages/components/atoms/InputTextWithIcon';
import LabelRequire from './pages/components/atoms/LabelRequire';
import Button from './pages/components/atoms/Button';
import ButtonWithIcon from './pages/components/atoms/ButtonWithIcon';
import CheckBoxCustom from './pages/components/atoms/CheckBoxCustom';
import Heading1 from './pages/components/atoms/Heading1';
import Heading2 from './pages/components/atoms/Heading2';
import Paragraph from './pages/components/atoms/Paragraph';

const App: () => React$Node = () => {
  return (
    <View>
      <Label />
      <InputText />
      <View style={{marginTop: 64}}>
        <InputTextWithIcon />
      </View>
      <View style={{marginTop: 64}}>
        <LabelRequire />
      </View>
      <View style={{marginTop: 64}}>
        <Button />
      </View>
      <View style={{marginTop: 64}}>
        <ButtonWithIcon />
      </View>
      <View style={{marginTop: 64}}>
        <CheckBoxCustom />
      </View>
      <View style={{marginTop: 64}}>
        <Heading1 />
      </View>
      <View style={{marginTop: 64}}>
        <Heading2 />
      </View>
      <View style={{marginTop: 64}}>
        <Paragraph />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
