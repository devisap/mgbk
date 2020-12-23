import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CheckBoxCstm from '@react-native-community/checkbox';

const CheckBox = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', height: 24, alignItems: 'center'}}>
                <CheckBoxCstm value={isSelected} onValueChange={setSelection} tintColors={{true: "#3273DC"}}/>
                <Text style={{fontFamily: "Lato", fontSize: 20, color: "#4a4a4a", lineHeight: 24}}>Lorep Ipsum</Text>
            </View>
        </View> 
    );
};

export default CheckBox;