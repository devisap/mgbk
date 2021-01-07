import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    SplashScreen, Login, Register, Home,
    SettingProfile, ReportingStep1, DailyReport
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
                        backgroundColor: "#48CAE4",
                        
                    },
                    headerTitleStyle: {
                        fontFamily: "Lato",
                        color: "#fff",
                        fontSize: 20
                    },
                    headerBackTitleStyle: {
                        color: "#fff",
                        backgroundColor: "#fff"
                    }
                }}
            />
            <Stack.Screen name={"ReportingStep1"} component={ReportingStep1} 
                options={{
                    title : "Profil",
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
            <Stack.Screen name={"DailyReport"} component={DailyReport} 
                options={{
                    title : "Laporan",
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
        </Stack.Navigator>
    )
}

export default Router