import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'


const UsernameField = (props) => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState(props.value? props.value : '')

    useEffect(() => {
        if(props.onChangeValue)
            props.onChangeValue(value)
    }, [value])

    return (
        <View style={{flex: 1}}>
            <Label text={"Username"} />
            <View style={{marginTop: 8}}>
                <View style={{position: 'absolute', left:11, top: 10}}>
                    <Icon name="user" size={16} color={isFocused == true? '#48CAE4' : '#DBDBDB'} />
                </View>
                <TextInput 
                    style={isFocused == true? styles.focused : styles.notFocused} 
                    placeholder={"Username"} 
                    selectionColor={"#48CAE4"}
                    onFocus={() => setIsFocused(true)}
                    onEndEditing={() => setIsFocused(false)}
                    onChangeText={(text) => setValue(text)}
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
        paddingLeft: 37,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#DBDBDB'
    },
    focused: {
        flex: 1,
        height: 38,
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16, 
        paddingLeft: 37,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#48CAE4'
    }
})
export default UsernameField