import React from 'react'
import { StyleSheet, View } from 'react-native'

const InfoProfileCard = () => {
    return (
        <View style={styles.box}>
            
        </View>
    )
}

const styles = StyleSheet({
    box : {
        backgroundColor: "#F5F5F5", 
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 5,
        marginTop: 5
    }
})

export default InfoProfileCard