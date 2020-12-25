import React, { useState } from 'react'
import { View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Paragraph from '../../../atoms/texts/Paragraph';

const RememberMeField = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Paragraph text={'Ingat Saya'} />
            </View>
        </View>
    )
}

export default RememberMeField