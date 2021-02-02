import React from 'react'
import { Text, View } from 'react-native'

const ErrorLabel = (props) => {
    return (
        <View style={{marginTop: 32, marginBottom: -8}}>
            <View style={{flex:1, backgroundColor: '#e74c3c', borderRadius: 4, justifyContent: 'center', paddingLeft: 16, paddingVertical: 11}}>
                <Text style={{fontFamily: 'Lato', color: '#fff', fontSize: 16}}>{props.msgErrReq? props.msgErrReq : ''}</Text>
            </View>
        </View>
    )
}

export default ErrorLabel