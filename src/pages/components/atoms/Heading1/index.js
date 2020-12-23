import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading1 = () => {
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
        fontWeight: "600",
        fontSize: 40
    }
})

export default Heading1;