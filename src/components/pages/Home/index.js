import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HomeLayout from '../../templates/HomeLayout'

const Home = ({navigation}) => {
    return (
        <View>
            <View style={{flex: 1, height:50}}>
                <Text>Tes</Text>
            </View>
            <ScrollView>
                <HomeLayout  
                    onPressLengkapiProfil={() => navigation.navigate('Profile')} 
                    onPressBuatLaporan={() => navigation.navigate('CreateReport')} 
                    onPressCetakLaporan={() => navigation.navigate('DailyReport')} 
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Home