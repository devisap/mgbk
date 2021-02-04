import React from 'react'
import { Image, View } from 'react-native'

const CircleImage = (props) => {
    if(props.source)
        return <Image source={{uri: props.source}} style={{width: 128, height: 128, borderRadius: 100}}/>
    else
        return <Image source={require("../../../../assets/images/img_128x128.jpg")} style={{width: 128, height: 128, borderRadius: 100}}/>
}

export default CircleImage