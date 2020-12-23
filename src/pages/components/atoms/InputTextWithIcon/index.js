import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import IcInfo from '../../../../assets/icons/ic_info.svg'

const InputTextWithIcon = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.inputGroup}>
                <IcInfo />
                <TextInput style={styles.input} placeholder="Input" placeholderStyle />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputGroup : {
        borderStyle: "solid", 
        borderColor:"#DBDBDB", 
        borderWidth: 1, 
        borderRadius: 4, 
        height: 40,
        paddingLeft: 11,
        flexDirection:"row",
        alignItems: 'center'
    },
    input: {
        fontSize: 20,
        fontWeight: "400", 
        fontFamily: "Lato",
        lineHeight: 24,
        marginStart: 2
    }
})

export default InputTextWithIcon