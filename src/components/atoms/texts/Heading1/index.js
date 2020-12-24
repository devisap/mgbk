import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading1 = (props) => {
    return <Text style={styles.text}>{props.text? props.text : "Heading 1"}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "600",
        fontSize: 40,
        lineHeight: 48,
        color: "#4a4a4a"
    }
})

export default Heading1