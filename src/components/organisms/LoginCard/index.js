import React from 'react'
import { View } from 'react-native'
import ButtonSecondary from '../../atoms/buttons/ButtonSecondary'
import Heading1 from '../../atoms/texts/Heading1'
import ButtonAuth from '../../molecules/buttons/ButtonAuth'
import EmailField from '../../molecules/forms/EmailField'
import PasswordField from '../../molecules/forms/PasswordField'
import RememberMeField from '../../molecules/forms/RememberMeField'
import OrBox from '../../molecules/OrBox'

const LoginCard = (props) => {
    return (
        <View style={{backgroundColor: "#f5f5f5", flex: 1, paddingHorizontal: 49, borderRadius: 8}}>
            <View style={{marginTop: 35}}>
                <Heading1 text={"Login"} />
            </View>
            <View style={{marginTop: 32}}>
                <EmailField />
            </View>
            <View style={{marginTop: 24}}>
                <PasswordField />
            </View>
            <View style={{marginTop: 24}}>
                <RememberMeField />               
            </View>
            <View style={{marginTop: 24}}>
                <ButtonAuth text={"Login"} onPress={props.onPressLogin} />
            </View>
            <View style={{marginTop: 18}}>
                <OrBox />
            </View>
            <View style={{marginTop: 18, marginBottom: 35}}>
                <ButtonSecondary onPress={props.onPressDaftar} text={"Daftar"} />
            </View>
        </View>
    )
}

export default LoginCard