import React from 'react'
import { Text, View } from 'react-native'
import Label from '../../texts/Label'

const ButtonPrimary = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#48CAE4", flex: 1, height: 42, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Label color={"white"} text={props.text? props.text : "Label"} />
            </View>
        </View>
    )
}

export default ButtonPrimary