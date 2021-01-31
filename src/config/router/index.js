import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import HomeDrawer from './navigation/drawer'
import {
    SplashScreen, Login, Register, ForgotPassword
} from '../../components/pages'

import HomeDrawer from './navigation/drawer';
const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="ForgotPassword">
            <Stack.Screen name={"Register"} component={Register} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name={"Login"} component={Login} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={"ForgotPassword"} component={ForgotPassword}
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