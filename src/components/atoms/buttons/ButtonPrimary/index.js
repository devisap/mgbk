import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Label from '../../texts/Label'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ButtonPrimary = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#48CAE4", flex: 1, height: 42, borderRadius: 4}}>
                <TouchableOpacity style={{flex: 1}} onPress={() => alert("ilham")}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{marginLeft: 10}}>
                            <Label color={"white"} text={props.text? props.text : "Label"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonPrimary