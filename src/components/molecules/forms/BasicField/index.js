import React, { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react/cjs/react.development'
import Label from '../../../atoms/texts/Label'

const BasicField = (props) => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState(props.value? props.value : '')

    // useEffect(() => {
    //     if(props.value)
    //         setValue(props.value)
    // }, [])

    useEffect(() => {
        if(props.onChangeValue)
            props.onChangeValue(value)
    }, [value])

    return (
        <View style={{flex: 1}}>
            <Label text={props.label} />
            <View style={{marginTop: 8}}>
                <TextInput 
                    style={isFocused == true? styles.focused : styles.notFocused} 
                    placeholder={props.placeholder} 
                    selectionColor={"#48CAE4"}
                    onFocus={() => setIsFocused(true)}
                    onEndEditing={() => setIsFocused(false)}
                    value={value}
                    onChangeText={(value) => setValue(value)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notFocused:{
        flex: 1,
        height: 38,
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16,
        paddingLeft: 11,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#DBDBDB"
    },
    focused:{
        flex: 1,
        height: 38,
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16,
        paddingLeft: 11,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#48CAE4"
    }
})

export default BasicField