import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading3 = (props) => {
    const setColor = props.color? props.color: "#4a4a4a";
    const setTextAlign = props.textAlign? props.textAlign : "left"
    const setFontWeight = props.fontWeight? props.fontWeight : "normal"
    
    return <Text style={styles.text(setColor, setTextAlign, setFontWeight)}>{props.text? props.text : "Lorem Ipsum"}</Text>
}

const styles = StyleSheet.create({
    text: (setColor, setTextAlign, setFontWeight) => {
        return {
            fontFamily: "Lato",
            fontSize: 16,
            color: setColor,
            lineHeight: 19,
            textAlign: setTextAlign,
            fontWeight : setFontWeight
        }
    }
})

export default Heading3