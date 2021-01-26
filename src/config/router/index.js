import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    SplashScreen, Login, Register, Home,
    SettingProfile, CreateReport, DailyReport
} from '../../components/pages'


const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
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
            <Stack.Screen name={"Home"} component={Home} 
                options={{
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
                    headerBackTitle: "tes",
                    headerTintColor: '#fff'
                }}
            />
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
                    headerTintColor: '#fff'
                }}
            />
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
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    )
}

export default Router