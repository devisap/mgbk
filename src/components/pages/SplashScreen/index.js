import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import IsLoggedIn from '../../../config/storage/IsLoggedIn';
import Logo from '../../../assets/images/splash_logo.svg'

const SplashScreen = ({navigation}) => {
    setTimeout(async() => {
        const isLoggedIn = await IsLoggedIn()
        if(isLoggedIn)
            navigation.replace('Home')
        else
            navigation.replace('Login')

    }, 2000);

    return (
        <View style={{backgroundColor: "#fff", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar hidden></StatusBar>
                <Image source={require('../../../assets/images/splash_logo.png')} style={{width: "100%"}} />
                <Text style={styles.text}>MGBK SMA Kota Malang</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        color: "#4a4a4a",
        fontWeight: "600",
        fontSize: 29,
        marginTop: 81
    }
})

export default SplashScreen;