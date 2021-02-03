import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HomeLayout from '../../templates/HomeLayout'

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <HomeLayout  
                onPressLengkapiProfil={() => navigation.navigate('Profile')} 
                onPressBuatLaporan={() => navigation.navigate('CreateReport')} 
                onPressCetakLaporan={() => navigation.navigate('DailyReport')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Home