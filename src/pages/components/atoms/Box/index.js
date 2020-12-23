import React from 'react';
import { StyleSheet, View } from 'react-native';

const Box = () => {
    return (
        <View style={{flex: 1, padding: 10}}>
            <View style={styles.box}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 200, 
        backgroundColor: "#f5f5f5", 
        borderRadius: 6, 
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5
    }
});

export default Box

