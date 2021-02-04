import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HomeLayout from '../../templates/HomeLayout'

const Home = ({navigation}) => {

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
            const id = await AsyncStorage.getItem('id')
            console.log(isLoggedIn+id)
        } catch (error) {
            alert(error)
        }
    }
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