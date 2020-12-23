import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const InputText = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.inputGroup} >
                <TextInput style={styles.input} placeholder="Input" placeholderStyle />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup : {
        borderStyle: "solid", 
        borderColor:"#DBDBDB", 
        borderWidth: 1, 
        borderRadius: 4, 
        height: 40,
        paddingLeft: 11
    },
    input: {
        fontSize: 20,
        fontWeight: "400", 
        fontFamily: "Lato",
        lineHeight: 24
    }
})

export default InputText