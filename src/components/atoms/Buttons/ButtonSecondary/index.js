import React from 'react'
import { Text, View } from 'react-native'
import Label from '../../texts/Label'

const ButtonSecondary = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#DBDBDB", flex: 1, height: 42, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Label text={props.text? props.text : "Label"} />
            </View>
        </View>
    )
}

export default ButtonSecondary