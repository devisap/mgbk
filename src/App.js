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
import { NavigationContainer } from '@react-navigation/native';
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
import ButtonPrimary from './components/atoms/buttons/ButtonPrimary';
import ButtonSecondary from './components/atoms/buttons/ButtonSecondary';
import ButtonSuccess from './components/atoms/buttons/ButtonSuccess';
import LabelUnderline from './components/atoms/texts/LabelUnderline';
import ButtonAuth from './components/molecules/buttons/ButtonAuth';
import EmailField from './components/molecules/forms/EmailField';
import PasswordField from './components/molecules/forms/PasswordField';
import RememberMeField from './components/molecules/forms/RememberMeField';
import LoginCard from './components/organisms/LoginCard';
import OrBox from './components/molecules/OrBox';
import LoginLayout from './components/templates/LoginLayout';
import RegisterLayout from './components/templates/RegisterLayout';
import ButtonMulai from './components/molecules/links/LinkMulai';
import LinkMulai from './components/molecules/links/LinkMulai';
import FinishingProfileCard from './components/organisms/MenuHomeCard';
import HomeLayout from './components/templates/HomeLayout';
import ProfileImage from './components/atoms/images/CircleImage';
import CircleImage from './components/atoms/images/CircleImage';
import InfoProfileCard from './components/organisms/InfoProfileCard';
import Heading3 from './components/atoms/texts/Heading3';
import ButtonSubmit from './components/molecules/buttons/ButtonSubmit';
import ProfileLayout from './components/templates/ProfileLayout';
import ReportLayout from './components/templates/DailyReportLayout';
import DailyReportLayout from './components/templates/DailyReportLayout';
import SettingProfileLayout from './components/templates/SettingProfileLayout';
import ReportingStep1Layout from './components/templates/ReportingStep1Layout';
import ReportingStep2Layout from './components/templates/ReportingStep2Layout';
import Router from './config/router';
import DateField from './components/molecules/forms/DateField';
import CreateReportLayout from './components/templates/CreateReportLayout';
import ForgotPasswordCard from './components/organisms/ForgotPasswordCard';
import ForgotPasswordLayout from './components/templates/ForgotPasswordLayout';
import ForgotPassword from './components/organisms/ForgotPasswordCard';
import { Provider } from 'react-redux';
import store from './config/redux/store'
import AddSchool from './components/pages/AddSchool';
const App = () => {
  // return <SplashScreen />
  // return <IcAlignJustifyWhite />
  // return (
  //   <View>
  //     <ScrollView>
  //       {/* atoms */}
  //       {/* <IcArrowLeftWhite />
  //       <IcArrowLongRightBlack />
  //       <IcCalendarBlack />
  //       <IcEnvelope />
  //       <IcEyeBlack />
  //       <IcHomeWhite />
  //       <IcLock />
  //       <IcPolygonBlack />
  //       <IcSigninWhite />
  //       <IcSignoutRed />
  //       <IcStickyNoteBlack />
  //       <IcUpload />
  //       <IcUser />
  //       <IcUserBlack />
  //       <Heading1 />
  //       <Heading2 />
  //       <Paragraph />
  //       <Label />
  //       <LabelUnderline text={"Masuk"}/>
  //       <LabelRequire />
  //       <ButtonPrimary text={"Button"}/>
  //       <ButtonSecondary text={"Button"} />
  //       <ButtonSuccess text={"Button"} /> */}

  //       {/* molecules */}
  //       {/* <ButtonAuth text={"Login"}/>
  //       <EmailField />
  //       <PasswordField />
  //       <RememberMeField /> */}

  //       {/* organisms */}
  //       {/* <LoginCard /> */}
  //       {/* <OrBox /> */}
        
  //       {/* pages */}
  //       <LoginLayout />
  //     </ScrollView>
  //   </View>
  // )

  return (
    // templates
    // <LoginLayout />
    // <RegisterLayout />
    // <ButtonPrimary />
    // <View></View>
    // <LinkMulai />
    // <FinishingProfileCard />
    // <HomeLayout />
    // <Login />
    // <CircleImage />
    // <InfoProfileCard />
    // <ButtonSubmit title={"Perbarui profil"} />
    // <ProfileLayout />
    // <DailyReportCard />
    // <DailyReportLayout />
    // <SettingProfileLayout />
    // <ReportingStep1Layout />
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        {/* <Drawer /> */}
      </NavigationContainer>
    </Provider>
    // <AddSchool />
    // <ForgotPasswordCard />
    // <ForgotPasswordLayout />
    // <ForgotPassword />
    // <CreateReportLayout />
    // <DateField />
  )
};

export default App;
