import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import IsLoggedIn from '../../../config/storage/IsLoggedIn';

const SplashScreen = ({navigation}) => {
    setTimeout(async() => {
        const isLoggedIn = await IsLoggedIn()
        if(isLoggedIn)
            navigation.replace('Home')
        else
            navigation.replace('Login')

    }, 2000);

    return (
        <View style={{backgroundColor: "#48CAE4", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar hidden></StatusBar>
            <Text style={styles.text}>MGBK SMA</Text>
            <Text style={styles.text}>KOTA MALANG</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        color: "#fff",
        fontWeight: "600",
        fontSize: 40
    }
})

export default SplashScreen;