import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading2 = (props) => {
    const setTextAlign = props.textAlign? props.textAlign : "left"
    return <Text style={styles.text(setTextAlign)}>{props.text? props.text : "Heading 2"}</Text>
}

const styles = StyleSheet.create({
    text: (setTextAlign) => {
        return {
            fontFamily: "Lato",
            fontWeight: "400",
            fontSize: 28,
            lineHeight: 34,
            color: "#4a4a4a",
            textAlign: setTextAlign
        }
    }
})

export default Heading2