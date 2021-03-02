import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useReducer } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import HomeLayout from '../../templates/HomeLayout'

const Home = ({navigation}) => {
    const globalState = useSelector(state => state.ProfileVerifiedReducer.isProfileVerified)

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
            const id = await AsyncStorage.getItem('id')
        } catch (error) {
            alert(error)
        }
    }

    const CheckReportNavigate = (page) => {
        if(globalState){
            navigation.navigate(page)
        }else{
            Alert.alert(
                "Info",
                "Mohon untuk melengkapi data profil",
                [
                    { text: "OK", onPress: () => '' }
                ],
                { cancelable: false }
            );
        }
    }
    
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <HomeLayout  
                onPressLengkapiProfil={() => navigation.navigate('SettingProfile')} 
                onPressBuatLaporan={() => CheckReportNavigate('CreateReport')} 
                onPressCetakLaporan={() => CheckReportNavigate('DailyReport')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Home