import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LabelRequire = () => {
    return (
        <View>
            <Text style={styles.text}>Minimal 8 karakter</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 12
    }
})

export default LabelRequire