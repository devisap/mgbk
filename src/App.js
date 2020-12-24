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
import IcAlignJustifyWhite from './components/atoms/icons/IcAlignJustifyWhite';
import IcArrowLeftWhite from './components/atoms/icons/IcArrowLeftWhite';
import IcArrowLongRightBlack from './components/atoms/icons/IcArrowLongRightBlack';
import IcCalendarBlack from './components/atoms/icons/IcCalendarBlack';
import IcEnvelope from './components/atoms/icons/IcEnvelope';
import IcEyeBlack from './components/atoms/icons/IcEyeBlack';
import IcHomeWhite from './components/atoms/icons/IcHomeWhite';
import IcLock from './components/atoms/icons/IcLock';
import IcPolygonBlack from './components/atoms/icons/IcPolygonBlack';
import IcSigninWhite from './components/atoms/icons/IcSigninWhite';
import IcSignoutRed from './components/atoms/icons/IcSignoutRed';
import IcStickyNoteBlack from './components/atoms/icons/IcStickyNoteBlack';
import IcUpload from './components/atoms/icons/IcUpload';
import IcUser from './components/atoms/icons/IcUser';
import IcUserBlack from './components/atoms/icons/IcUserBlack';
import SplashScreen from './components/pages/SplashScreen';

const App = () => {
  // return <SplashScreen />
  // return <IcAlignJustifyWhite />
  return (
    <View>
      <IcArrowLeftWhite />
      <IcArrowLongRightBlack />
      <IcCalendarBlack />
      <IcEnvelope />
      <IcEyeBlack />
      <IcHomeWhite />
      <IcLock />
      <IcPolygonBlack />
      <IcSigninWhite />
      <IcSignoutRed />
      <IcStickyNoteBlack />
      <IcUpload />
      <IcUser />
      <IcUserBlack />
    </View>
  )
};

export default App;
