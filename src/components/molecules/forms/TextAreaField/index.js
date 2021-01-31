import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'

const TextAreaField = (props) => {
    const [isFocused, setIsFocused] = useState(false)
    
    return (
        <View style={{flex: 1}}>
            <Label text={"Detail"} />
            <View style={{marginTop: 8}}>
                <TextInput 
                    style={isFocused == true? styles.focused : styles.notFocused} 
                    placeholder={"Detail..."} 
                    selectionColor={"#48CAE4"} 
                    multiline={true} 
                    numberOfLines={10} 
                    onFocus={() => setIsFocused(true)}    
                    onEndEditing={() => setIsFocused(false)}    
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notFocused:{
        flex: 1, 
        alignContent: 
        'flex-start', 
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16, 
        borderWidth: 1, 
        borderRadius: 4, 
        borderColor: '#DBDBDB',
        paddingLeft: 11,
        textAlignVertical: 'top'
    },
    focused:{
        flex: 1, 
        alignContent: 
        'flex-start', 
        fontFamily: "Lato", 
        color: '#000', 
        fontSize: 16, 
        borderWidth: 1, 
        borderRadius: 4, 
        borderColor: '#48CAE4',
        paddingLeft: 11,
        textAlignVertical: 'top'
    }
})

export default TextAreaField