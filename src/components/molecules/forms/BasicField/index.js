import React from 'react'
import { TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'

const BasicField = (props) => {
    return (
        <View style={{flex: 1}}>
            <Label text={props.label} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                    <View style={{marginTop:5}}>
                        <TextInput style={{fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={props.placeholder} selectionColor={"#48CAE4"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BasicField