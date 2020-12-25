import React from 'react'
import { Image, View } from 'react-native'

const CircleImage = () => {
    return <Image source={require("../../../../assets/images/img_128x128.jpg")} style={{width: 128, height: 128, borderRadius: 100}}/>
}

export default CircleImage