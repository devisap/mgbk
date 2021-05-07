import CheckBox from '@react-native-community/checkbox'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Heading3 from '../../atoms/texts/Heading3'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'

const PrintAll = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {
        if(props.onChangeUseHeader)
            props.onChangeUseHeader(toggleCheckBox)
    }, [toggleCheckBox])

    return (
        <View style={{marginVertical: 16, marginHorizontal: 32}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <CheckBox 
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    tintColors={{true: '#48CAE4'}}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                    <Heading3 text={'Cetak dengan header'} />
                </TouchableOpacity>
            </View>
            <ButtonSubmit title={"Cetak Semua"} onPress={() => props.onPress()} />
        </View>
    )
}

export default PrintAll