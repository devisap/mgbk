import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import IcArrowLongRightBlack from '../../../atoms/icons/IcArrowLongRightBlack'
import Heading3 from '../../../atoms/texts/Heading3'

const ButtonSubmit = (props) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <View style={{backgroundColor: "#FFDD57", flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 6, alignItems: 'center'}}>
                    <View style={{flex: 1}}>
                        <Heading3 text={props.title? props.title : "Lorem Ipsum"} fontWeight={"bold"} />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <IcArrowLongRightBlack />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonSubmit