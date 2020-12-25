import React from 'react'
import { View } from 'react-native'
import IcSigninWhite from '../../../atoms/icons/IcSigninWhite'
import Label from '../../../atoms/texts/Label'

const ButtonAuth = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#48CAE4", flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 42, borderRadius: 4}}>
                <IcSigninWhite />
                <View style={{marginLeft: 10}}>
                    <Label color="white" text={props.text? props.text : "Label"} />
                </View>
            </View>
        </View>
    )
}

export default ButtonAuth