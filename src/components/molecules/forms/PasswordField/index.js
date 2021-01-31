import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'

const PasswordField = (props) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={{flex: 1}}>
            <Label text={"Password"} />
            <View style={{marginTop: 8}}>
                <TextInput 
                    secureTextEntry={true} 
                    style={isFocused == true? styles.focused:styles.notFocused} 
                    placeholder={"Password"} 
                    selectionColor={"#48CAE4"}
                    onFocus={() => setIsFocused(true)}
                    onEndEditing={() => setIsFocused(false)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notFocused: {
        flex: 1,
        height: 38,
        fontFamily: "Lato",
        color: '#000', 
        fontSize: 16, 
        lineHeight: 24,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#DBDBDB',
        paddingLeft: 37
    },
    focused: {
        flex: 1,
        height: 38,
        fontFamily: "Lato",
        color: '#000', 
        fontSize: 16, 
        lineHeight: 24,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#48CAE4',
        paddingLeft: 37
    },
})

export default PasswordField