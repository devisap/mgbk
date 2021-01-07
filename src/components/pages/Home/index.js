import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeLayout from '../../templates/HomeLayout'

const Home = ({navigation}) => {
    const linkWithoutBack = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <HomeLayout  
            onPressLengkapiProfil={() => linkWithoutBack('SettingProfile')} 
            onPressBuatLaporan={() => linkWithoutBack('ReportingStep1')} 
            onPressCetakLaporan={() => linkWithoutBack('DailyReport')} 
        />
    )
}

const styles = StyleSheet.create({
    
})

export default Home