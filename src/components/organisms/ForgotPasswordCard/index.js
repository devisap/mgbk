import React from 'react'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary'
import ButtonSecondary from '../../atoms/buttons/ButtonSecondary'
import Heading1 from '../../atoms/texts/Heading1'
import EmailField from '../../molecules/forms/EmailField'
import OrBox from '../../molecules/OrBox'

const ForgotPassword = (props) => {
    const [currInputFocus, setCurrInputFocus] = useState('');

    inputClick = (field) => {
        setCurrInputFocus(field)
    } 

    return(
        <View style={{backgroundColor: "#f5f5f5", flex: 1, paddingHorizontal: 49, borderRadius: 8}}>
            <View style={{marginTop: 35}}>
                <Heading1 text={"Lupa Password"} />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => inputClick('email')}>
                <View style={{marginTop: 32}}>
                    <EmailField isFocus={currInputFocus == 'email'? true: false} />
                </View>
            </TouchableOpacity>
            <View style={{marginTop: 24}}>
                <ButtonPrimary text={"Reset Password"} onPress={props.onPressForgot} />
            </View>
            <View style={{marginTop: 18}}>
                <OrBox />
            </View>
            <View style={{marginTop: 18, marginBottom: 35}}>
                <ButtonSecondary onPress={props.onPressLogin} text={"Login"} />
            </View>
        </View>
    )
}

export default ForgotPassword