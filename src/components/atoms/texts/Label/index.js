import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Label = (props) => {
    if(props.color){
        if(props.color == "white"){
            return (
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textWhite}>{props.text? props.text : "Label"}</Text>
                    <Text>{props.required? '*' : ''}</Text>
                </View>
            )
        }
    }else{
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>{props.text? props.text : "Label"}</Text>
                <Text style={styles.required}>{props.required? ' *' : ''}</Text>
            </View>
        )
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
    },
    required: {
        color: '#FF0000'
    }
})

export default Label