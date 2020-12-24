import React from 'react'
import { StyleSheet, Text } from 'react-native'

const LabelUnderline = (props) => {
    return <Text style={styles.text}>{props.text? props.text : "LabelUnderline"}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 20,
        lineHeight: 24,
        color: "#000"
    }
})

export default LabelUnderline