import React from 'react'
import { StyleSheet, Text } from 'react-native'

const LabelRequire = (props) => {
    if(props.color){
        if(props.color == "white"){
            return <Text style={styles.textWhite}>{props.text? props.text : "Lorem ipsum dolor "}</Text>
        }
    }else{
        return <Text style={styles.text}>{props.text? props.text : "Lorem ipsum dolor "}</Text>
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 12,
        color: "#4a4a4a"
    }
})

export default LabelRequire