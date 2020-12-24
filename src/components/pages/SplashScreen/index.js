import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = () => {
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