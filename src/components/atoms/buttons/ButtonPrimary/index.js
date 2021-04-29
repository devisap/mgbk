import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Label from '../../texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonPrimary = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: "#48CAE4", flex: 1, height: 42, borderRadius: 4}}>
                <TouchableOpacity style={{flex: 1}} onPress={() => props.onPress()}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <View style={{marginTop: 3, marginRight: 5}}> 
                                <Icon name={'search'} size={18} color={"#fff"}/>
                            </View>
                            <Label color={"white"} text={props.text? props.text : "Label"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonPrimary