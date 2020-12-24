import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Heading1 from '../components/atoms/Heading1';

const SplashScreen = () => {
    return (
        <View style={{backgroundColor: "#3273DC", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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