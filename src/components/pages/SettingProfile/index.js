import React from 'react'
import { StyleSheet, View } from 'react-native'
import SettingProfileLayout from '../../templates/SettingProfileLayout'

const SettingProfile = ({navigation}) => {
    const linkWithBack = (screen) => {
        alert(screen);
    }
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <SettingProfileLayout />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SettingProfile