import React from 'react'
import { Text, View } from 'react-native'
import Label from '../../texts/Label'

const ButtonSuccess = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#23D160", flex: 1, height: 42, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Label color={"white"} text={props.text? props.text : "Label"} />
            </View>
        </View>
    )
}

export default ButtonSuccess