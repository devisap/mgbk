import React from 'react'
import { TextInput, View } from 'react-native'
import IcUser from '../../../atoms/icons/IcUser'
import Label from '../../../atoms/texts/Label'

const UsernameField = () => {
    return (
        <View style={{flex: 1}}>
            <Label text={"Username"} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <IcUser />
                    <View style={{marginLeft: 10, marginTop:5}}>
                        <TextInput style={{fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={"Username"} selectionColor={"#48CAE4"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UsernameField