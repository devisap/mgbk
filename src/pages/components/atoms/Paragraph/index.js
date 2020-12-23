import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Paragraph = () => {
    return (
        <View>
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        color: "#4a4a4a",
        fontWeight: "400",
        fontSize: 20
    }
})

export default Paragraph;