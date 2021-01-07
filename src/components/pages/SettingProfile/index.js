import React from 'react'
import { StyleSheet, View } from 'react-native'
import SettingProfileLayout from '../../templates/SettingProfileLayout'

const SettingProfile = ({navigation}) => {
    const linkWithBack = (screen) => {
        alert(screen);
    }
    return (
        <SettingProfileLayout />
    )
}

const styles = StyleSheet.create({
    
})

export default SettingProfile