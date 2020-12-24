import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Paragraph = (props) => {
    return <Text style={styles.text}>{props.text? props.text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lato",
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 24,
        color: "#4a4a4a"
    }
})

export default Paragraph