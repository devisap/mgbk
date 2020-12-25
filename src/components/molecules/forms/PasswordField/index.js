import React from 'react'
import { TextInput, View } from 'react-native'
import IcLock from '../../../atoms/icons/IcLock'
import Label from '../../../atoms/texts/Label'

const PasswordField = () => {
    return (
        <View>
            <Label text={"Password"} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <IcLock />
                    <View style={{marginLeft: 10, marginTop: 5}}>
                        <TextInput secureTextEntry={true} style={{fontFamily: "Lato", color: '#000', fontSize: 16, lineHeight: 24, marginRight: 24}} placeholder={"Password"} selectionColor={"#48CAE4"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PasswordField