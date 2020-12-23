import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IcInfoWhite from '../../../../assets/icons/ic_info_white.svg'

const ButtonWithIcon = () => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={styles.button}>
                <IcInfoWhite />
                <Text style={styles.text}>Button</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3273DC", 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 42, 
        borderRadius: 4,
        flexDirection: 'row'
    },
    text: {
        fontFamily: "Lato", 
        fontWeight: '400', 
        color: "#fff", 
        fontSize: 20,
        lineHeight: 24,
        marginLeft: 10
    }
})

export default ButtonWithIcon;