import React from 'react'
import { StyleSheet, View } from 'react-native'
import RegisterLayout from '../../templates/RegisterLayout'

const Register = ({navigation}) => {
    const linkToWithoutBack = (screen) => {
        navigation.replace(screen);
    }
    return (
        <RegisterLayout onPressDaftar={() => linkToWithoutBack('Home')} onPressLogin={() => linkToWithoutBack('Login')} />
    )
}

const styles = StyleSheet.create({
    
})

export default Register