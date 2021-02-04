import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        isLogging()
    }, 2000);

    const isLogging = async() => {
        try {
            const IS_LOGGED_IN = await AsyncStorage.getItem('IS_LOGGED_IN')
            if(IS_LOGGED_IN != null && IS_LOGGED_IN == 'y')
                navigation.replace('Home')
            else
                navigation.replace('Login')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <View style={{backgroundColor: "#48CAE4", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar hidden></StatusBar>
            <Text style={styles.text}>MGBK MALANG</Text>
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