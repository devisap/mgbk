import React from 'react';
import { Text, View } from 'react-native';

const CheckBoxCustom = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', height: 24, alignItems: 'center'}}>
                <Text style={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", lineHeight: 24}}>Lorep Ipsum</Text>
            </View>
        </View> 
    );
};

export default CheckBoxCustom;