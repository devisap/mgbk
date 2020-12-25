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
import Heading1 from './components/atoms/texts/Heading1';
import Heading2 from './components/atoms/texts/Heading2';
import Paragraph from './components/atoms/texts/Paragraph';
import Label from './components/atoms/texts/Label';
import SplashScreen from './components/pages/SplashScreen';
import LabelRequire from './components/atoms/texts/LabelRequire';
import ButtonPrimary from './components/atoms/Buttons/ButtonPrimary';
import ButtonSecondary from './components/atoms/Buttons/ButtonSecondary';
import ButtonSuccess from './components/atoms/Buttons/ButtonSuccess';
import LabelUnderline from './components/atoms/texts/LabelUnderline';
import ButtonAuth from './components/molecules/buttons/ButtonAuth';
import EmailField from './components/molecules/forms/EmailField';
import PasswordField from './components/molecules/forms/PasswordField';
import RememberMeField from './components/molecules/forms/RememberMeField';
import LoginCard from './components/organisms/LoginCard';

const App = () => {
  // return <SplashScreen />
  // return <IcAlignJustifyWhite />
  return (
    <View style={{backgroundColor: "#fff"}}>
      <ScrollView>
        {/* atoms */}
        {/* <IcArrowLeftWhite />
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
        <Heading1 />
        <Heading2 />
        <Paragraph />
        <Label />
        <LabelUnderline text={"Masuk"}/>
        <LabelRequire />
        <ButtonPrimary text={"Button"}/>
        <ButtonSecondary text={"Button"} />
        <ButtonSuccess text={"Button"} /> */}

        {/* molecules */}
        {/* <ButtonAuth text={"Login"}/>
        <EmailField />
        <PasswordField />
        <RememberMeField /> */}

        {/* organisms */}
        <LoginCard />
      </ScrollView>
    </View>
  )
};

export default App;
