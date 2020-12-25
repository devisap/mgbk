import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Label from '../../texts/Label'

const ButtonSecondary = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#DBDBDB", flex: 1, height: 42, borderRadius: 4}}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{marginLeft: 10}}>
                            <Label text={props.text? props.text : "Label"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonSecondary