import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Label = (props) => {
    if(props.color){
        if(props.color == "white"){
            return <Text style={styles.textWhite}>{props.text? props.text : "Label"}</Text>
        }
    }else{
        return <Text style={styles.text}>{props.text? props.text : "Label"}</Text>
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        color: "#4a4a4a"
    },
    textWhite: {
        fontFamily: "Lato",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        color: "#fff"
    }
})

export default Label