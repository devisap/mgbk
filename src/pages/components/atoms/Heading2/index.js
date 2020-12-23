import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading2 = () => {
    return (
        <View>
            <Text style={styles.text}>Lorep Ipsum</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        color: "#4a4a4a",
        fontWeight: "400",
        fontSize: 28
    }
})

export default Heading2;