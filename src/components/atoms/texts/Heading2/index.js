import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading2 = (props) => {
    return <Text style={styles.text}>{props.text? props.text : "Heading 2"}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "400",
        fontSize: 28,
        lineHeight: 34,
        color: "#4a4a4a"
    }
})

export default Heading2