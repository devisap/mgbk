import React from 'react'
import { View } from 'react-native'
import IcAlignJustifyWhite from '../../atoms/icons/IcAlignJustifyWhite'
import Label from '../../atoms/texts/Label'

const Navbar = (props) => {
    return (
        <View style={{backgroundColor: "#48CAE4", flex: 1, height: 60, flexDirection: 'row', alignItems: 'center', paddingLeft: 25}}>
            <IcAlignJustifyWhite />
            <View style={{marginLeft: 27}}>
                <Label text={props.pageName? props.pageName : "Lorem"} color={"white"} />
            </View>
        </View>
    )
}

export default Navbar