import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = () => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Button</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3273DC", 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 42, 
        borderRadius: 4
    },
    text: {
        fontFamily: "Lato", 
        fontWeight: '400', 
        color: "#fff", 
        fontSize: 20,
        lineHeight: 24
    }
})

export default Button;