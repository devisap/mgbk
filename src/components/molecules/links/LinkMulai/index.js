import React from 'react'
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import IcArrowLongRightBlack from '../../../atoms/icons/IcArrowLongRightBlack'
import LabelUnderline from '../../../atoms/texts/LabelUnderline'

const LinkMulai = (props) => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LabelUnderline text={props.title? props.title : "Lorem"} />
                    <View style={{marginLeft: 7}}>
                        <IcArrowLongRightBlack />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LinkMulai