import React from 'react'
import { TextInput, View } from 'react-native'
import IcEyeBlack from '../../../atoms/icons/IcEyeBlack'
import Label from '../../../atoms/texts/Label'

const PasswordFieldWithIcon = () => {
    return (
        <View style={{flex: 1}}>
            <Label text={"Password"} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <View style={{flex:1, marginLeft: 10, marginTop: 5}}>
                        <TextInput secureTextEntry={true} style={{fontFamily: "Lato", color: '#000', fontSize: 16, lineHeight: 24, marginRight: 24}} placeholder={"Password"} selectionColor={"#48CAE4"}/>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <IcEyeBlack />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PasswordFieldWithIcon