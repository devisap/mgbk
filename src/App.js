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
import CheckBox from './pages/components/atoms/CheckBox';
import Heading1 from './pages/components/atoms/Heading1';
import Heading2 from './pages/components/atoms/Heading2';
import Paragraph from './pages/components/atoms/Paragraph';
import Box from './pages/components/atoms/Box';
import Login from './pages/Login';

const App = () => {
  return <Login />
};

export default App;
