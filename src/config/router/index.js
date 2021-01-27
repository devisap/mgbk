import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    SplashScreen, Login, Register, Home,
    SettingProfile, CreateReport, DailyReport,
    Profile
} from '../../components/pages'
import { startClock } from 'react-native-reanimated';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return(
        <Drawer.Navigator
            drawerContentOptions =  {{
                activeTintColor: "#48CAE4",
                itemStyle: {

                }
            }}
        >
          <Drawer.Screen name="Home" component={Home} 
            options={{
                drawerLabel: "Home",
                drawerIcon: ({focused}) => (
                    <Icon name="home" size={18} color={focused? '#48CAE4' : '#4a4a4a'} />
                )
            }}
          />
          <Drawer.Screen name="CreateReport" component={CreateReportStack}
            options={{
                drawerLabel: "Buat Laporan",
                drawerIcon: ({focused}) => (
                    <Icon name="plus" size={18} color={focused? '#48CAE4' : '#4a4a4a'} />
                ),
            }}
          />
          <Drawer.Screen name="DailyReport" component={ListReportStack}
            options={{
                drawerLabel: "Laporan Harian",
                drawerIcon: ({focused}) => (
                    <Icon name="sticky-note" color={focused? '#48CAE4' : '#4a4a4a'} size={18} />
                )
            }}
          />
          <Drawer.Screen name="Profile" component={ProfileStack}
            options={{
                drawerLabel: "Profil",
                drawerIcon: ({focused}) => (
                    <Icon name="user" color={focused? '#48CAE4' : '#4a4a4a'} size={18} />
                )
            }}
          />
        </Drawer.Navigator>
    )
}

const CreateReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="CreteReport">
            <Stack.Screen name={"CreateReport"} component={CreateReport} 
                options={{
                    title : "Kegiatan",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}

const ListReportStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="DailyReport">
            <Stack.Screen name={"DailyReport"} component={DailyReport} 
                options={{
                    title : "Laporan Harian",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
        </Stack.Navigator>
    )
}
const ProfileStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name={"Profile"} component={Profile} 
                options={{
                    title : "Profil",
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#48CAE4" size={18} color={'#fff'} onPress={() => navigation.openDrawer()} />
                }}
            />
            <Stack.Screen name={"SettingProfile"} component={SettingProfile} 
                options={{
                    title : "Pengaturan Profil",
                    headerStyle: {
                        backgroundColor: '#48CAE4'
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen name={"Register"} component={Register} 
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    }
                }}
            />
            <Stack.Screen name={"Login"} component={Login} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={"Splash"} component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={"Home"} component={HomeDrawer} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router