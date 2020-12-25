import React from 'react'
import { Text, View } from 'react-native'

const OrBox = () => {
    return (
        <View style={{flex: 1, height: 19, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
                <View style={{borderColor: "#DBDBDB", borderWidth: 1}}></View>
            </View>
            <View style={{width: 67}}>
                <Text style={{fontFamily: "Lato", color: "#DBDBDB", fontSize: 16, lineHeight: 19, marginLeft: 17}}>Atau</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{borderColor: "#DBDBDB", borderWidth: 1}}></View>
            </View>
        </View>
    )
}

export default OrBox