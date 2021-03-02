import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    HomeStack, CreateReportStack, DailyReportStack,
    WeeklyReportStack, MonthlyReportStack, SemesterReportStack,
    YearlyReportStack, ProfileStack, SettingProfileStack
} from '../stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert, Text, View } from 'react-native';
import { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
const Drawer = createDrawerNavigator();

const HomeDrawer = ({navigation, route}) => {
    return(
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerContentOptions =  {{
                activeTintColor: "#48CAE4",
                labelStyle: {
                    fontFamily: 'Lato',
                    color: '#4a4a4a',
                    fontSize: 20
                }
            }}
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="CreateReport" component={CreateReportStack} />
          <Drawer.Screen name="DailyReport" component={DailyReportStack} />
          <Drawer.Screen name="WeeklyReport" component={WeeklyReportStack} />
          <Drawer.Screen name="MonthlyReport" component={MonthlyReportStack} />
          <Drawer.Screen name="SemesterReport" component={SemesterReportStack} />
          <Drawer.Screen name="YearlyReport" component={YearlyReportStack} />
          <Drawer.Screen name="Profile" component={ProfileStack} />
          <Drawer.Screen name="SettingProfile" component={SettingProfileStack} />
        </Drawer.Navigator>
    )
}

const CustomDrawerContent = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentDrawer, setCurrentDrawer] = useState('Home')
    const dispatch = useDispatch()
    const globalState = useSelector(state => state.ProfileVerifiedReducer.isProfileVerified)

    drawerClick = (stack) => {
        props.navigation.navigate(stack);
        setCurrentDrawer(stack)
    }

    const logout = async() => {
        try {
            await AsyncStorage.clear()
            dispatch({type: 'SET_PROFILES', value: {}})
            props.navigation.replace('Login')
        } catch (error) {
            alert(error)
        }
    }

    const CheckReportNavigate = (page) => {
        if(globalState){
            props.navigation.navigate(page);
                        setCurrentDrawer(page)
        }else{
            Alert.alert(
                "Info",
                "Mohon untuk melengkapi data profil",
                [
                    { text: "OK", onPress: () => '' }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <DrawerContentScrollView {...props}>
          <View style={{marginVertical: 18, marginLeft: 20}}>
              <Text style={{fontFamily: 'Lato', fontSize: 20, color: "#4a4a4a"}}>MGBK Malang</Text>
          </View>
          {/* <DrawerItemList {...props} /> */}
          
          <DrawerItem 
            focused={currentDrawer == 'Home'? true:false} label="Home"
            activeTintColor="#48CAE4"
            icon={({focused}) => <Icon name="home" size={18} color={focused? '#48CAE4' : '#4a4a4a'} /> } 
            labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a"}} 
            onPress={() => drawerClick('Home')} />
          <DrawerItem 
            focused={currentDrawer == 'CreateReport'? true:false} 
            label="Buat Laporan" 
            activeTintColor="#48CAE4"
            icon={({focused}) => <Icon name="plus" size={18} color={focused? '#48CAE4' : '#4a4a4a'} /> } 
            labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a"}} 
            onPress={() => CheckReportNavigate('CreateReport')} />

          <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
            <View style={{flexDirection: 'row', paddingLeft: 18, marginVertical: 18}}>
                <View style={{justifyContent: 'center'}}>
                    <Icon name="sticky-note" size={18} color="#4a4a4a" />
                </View>
                <View style={{marginLeft: 33, justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Lato', fontSize: 20, color: "#4a4a4a"}}>Laporan</Text>
                </View>
                <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'flex-end', marginRight: 27}}>
                    {
                        collapsed == false? 
                        <Icon name="caret-down" size={18} color="#4a4a4a" />
                        :
                        <Icon name="caret-right" size={18} color="#4a4a4a" />
                    }
                </View>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
                <DrawerItem 
                    focused={currentDrawer == 'DailyReport'? true:false} 
                    label="Harian" 
                    activeTintColor="#48CAE4"
                    labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 50}} 
                    onPress={() => CheckReportNavigate('DailyReport')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'WeeklyReport'? true:false} 
                    label="Mingguan" 
                    activeTintColor="#48CAE4"
                    labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 50}} 
                    onPress={() => CheckReportNavigate('WeeklyReport')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'MonthlyReport'? true:false} 
                    label="Bulanan" 
                    activeTintColor="#48CAE4"
                    labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 50}} 
                    onPress={() => CheckReportNavigate('MonthlyReport')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'SemesterReport'? true:false} 
                    label="Semesteran" 
                    activeTintColor="#48CAE4"
                    labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 50}} 
                    onPress={() => CheckReportNavigate('SemesterReport')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'YearlyReport'? true:false} 
                    label="Tahunan" 
                    activeTintColor="#48CAE4"
                    labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 50}} 
                    onPress={() => CheckReportNavigate('YearlyReport')} 
                />
          </Collapsible>
          <DrawerItem 
            focused={currentDrawer == 'Profile'? true:false} 
            label="Profil" 
            activeTintColor="#48CAE4"
            icon={({focused}) => <Icon name="user" size={18} color={focused? '#48CAE4' : '#4a4a4a'} /> } 
            labelStyle={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", marginLeft: 3}} 
            onPress={() => drawerClick('Profile')} />
          <TouchableOpacity onPress={() => logout()}>
            <View style={{flexDirection: 'row', paddingLeft: 18, marginVertical: 18}}>
                <View style={{justifyContent: 'center'}}>
                    <Icon name="sign-out" size={18} color="#FF3860" />
                </View>
                <View style={{marginLeft: 33, justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Lato', fontSize: 20, color: "#FF3860"}}>Sign Out</Text>
                </View>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
    );
}


export default HomeDrawer