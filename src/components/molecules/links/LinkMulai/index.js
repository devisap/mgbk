import React from 'react'
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import IcArrowLongRightBlack from '../../../atoms/icons/IcArrowLongRightBlack'
import LabelUnderline from '../../../atoms/texts/LabelUnderline'

const LinkMulai = () => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => {}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LabelUnderline text={"Mulai"} />
                    <View style={{marginLeft: 7}}>
                        <IcArrowLongRightBlack />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LinkMulai