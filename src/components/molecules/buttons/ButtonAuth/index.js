import React from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'
import IcSigninWhite from '../../../atoms/icons/IcSigninWhite'
import Label from '../../../atoms/texts/Label'

const ButtonAuth = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#48CAE4", flex: 1, height: 42, borderRadius: 4}}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <IcSigninWhite />
                        <View style={{marginLeft: 10}}>
                            <Label color="white" text={props.text? props.text : "Label"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonAuth