import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'

const EmailField = (props) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={{flex: 1}}>
            <Label text={"Email"} />
            <View style={{marginTop: 8}}>
                <View style={{position: 'absolute', left: 11, top: 10}}>
                    <Icon name="envelope" size={16} color={isFocused == true?'#48CAE4':'#DBDBDB'} />
                </View>
                <TextInput 
                    style={isFocused == true? styles.focused:styles.notFocused} 
                    placeholder={"Email"} 
                    selectionColor={"#48CAE4"}
                    onFocus={() => setIsFocused(true)}
                    onEndEditing={() => setIsFocused(false)}
                    keyboardType='email-address'
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
        borderWidth: 1, 
        paddingLeft: 37, 
        borderRadius: 4,
        borderColor: '#dbdbdb'
    },
    focused: {
        flex: 1,
        height: 38,
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16,  
        borderWidth: 1, 
        paddingLeft: 37, 
        borderRadius: 4,
        borderColor: '#48CAE4'
    }
})

export default EmailField