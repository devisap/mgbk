import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import HomeDrawer from './navigation/drawer'
import {
    SplashScreen, Login, Register
} from '../../components/pages'
import HomeDrawer from './navigation/drawer';
const Stack = createStackNavigator();

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