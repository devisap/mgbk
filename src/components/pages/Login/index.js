import React from 'react'
import { StyleSheet, View } from 'react-native'
import LoginLayout from '../../templates/LoginLayout'

const Login = ({navigation}) => {
    const linkToWithoutBack = (screen) => {
        navigation.replace(screen);
    }
    return (
        <LoginLayout onPressLogin={() => linkToWithoutBack('Home')} onPressDaftar={() => linkToWithoutBack('Register')} />
    )
}

const styles = StyleSheet.create({
    box: {
        height: 519, 
        backgroundColor: "#f5f5f5", 
        borderRadius: 6, 
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        paddingHorizontal: 49,
        paddingVertical: 35
    }
})

export default Login