import React from 'react'
import { View } from 'react-native'
import ButtonSecondary from '../../atoms/Buttons/ButtonSecondary'
import Heading1 from '../../atoms/texts/Heading1'
import ButtonAuth from '../../molecules/buttons/ButtonAuth'
import EmailField from '../../molecules/forms/EmailField'
import PasswordField from '../../molecules/forms/PasswordField'
import RememberMeField from '../../molecules/forms/RememberMeField'

const LoginCard = () => {
    return (
        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 17, justifyContent: 'center'}}>
            <View style={{ backgroundColor: "#F5F5F5", borderRadius: 8, flex: 1, height: 519, paddingHorizontal: 49, paddingVertical: 35}}>
                <Heading1 text={"Login"} />
                <View style={{marginTop: 32}}>
                    <EmailField />
                </View>
                <View style={{marginTop: 72}}>
                    <PasswordField />
                </View>
                <View style={{marginTop: 80}}>
                    <RememberMeField />
                </View>
                <View style={{marginTop: 37}}>
                    <ButtonAuth text={"Login"} />
                </View>
                <View style={{marginTop: 98}}>
                    <ButtonSecondary text={"Login"} />
                </View>
            </View>
        </View>
    )
}

export default LoginCard