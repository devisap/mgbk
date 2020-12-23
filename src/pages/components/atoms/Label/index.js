import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Label = () => {
    return (
        <View>
            <Text style={styles.text}>Label</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato", 
        fontWeight: "600", 
        fontSize: 20, 
        lineHeight: 24,
        color: '#4a4a4a'
    } 
})

export default Label