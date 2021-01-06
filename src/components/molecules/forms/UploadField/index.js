import React from 'react'
import { Text, TextInput, View } from 'react-native'
import IcUpload from '../../../atoms/icons/IcUpload'
import Label from '../../../atoms/texts/Label'

const UploadField = (props) => {
    return (
        <View style={{flex: 1}}>
            <Label text={props.label? props.label : ""} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#F5F5F5", alignItems: 'center', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <IcUpload />
                    <Text style={{fontFamily: "Lato", color: '#bababa', fontSize: 16, marginRight: 24, marginLeft: 8}}>Pilih File...</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderTopRightRadius: 4, borderBottomRightRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <TextInput style={{fontFamily: "Lato", color: '#4a4a4a', fontSize: 16}} editable={false}>gambar1.jpg</TextInput>
                </View>
            </View>
        </View>
    )
}

export default UploadField
