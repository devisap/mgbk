import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import ButtonSecondary from '../../atoms/buttons/ButtonSecondary'
import Heading1 from '../../atoms/texts/Heading1'
import ButtonAuth from '../../molecules/buttons/ButtonAuth'
import ErrorLabel from '../../molecules/ErrorLabel'
import EmailField from '../../molecules/forms/EmailField'
import PasswordField from '../../molecules/forms/PasswordField'
import RememberMeField from '../../molecules/forms/RememberMeField'
import UsernameField from '../../molecules/forms/UsernameField'
import OrBox from '../../molecules/OrBox'
import Loader from '../../molecules/Loader'
import { registerApi } from '../../../config/api/user'

const RegisterCard = (props) => {
    const [usernameValue, setUsernameValue] = useState('') 
    const [emailValue, setEmailValue] = useState('') 
    const [passValue, setPassValue] = useState('')
    const [isLoader, setIsLoader] = useState('false')
    const [isErrReq, setIsErrReq] = useState(false)
    const [msgErrReq, setMsgErrReq] = useState('')

    onChangeUsernameValue = (value) => setUsernameValue(value)
    onChangeEmailValue = (value) => setEmailValue(value)
    onChangePassValue = (value) => setPassValue(value)

    onSubmit = () => {
        setIsLoader(true)
        registerApi({
            name: usernameValue,
            email: emailValue,
            pass: passValue
        })
        .then(res => {
            if(res.data.status){
                setIsErrReq(false)
                setMsgErrReq('')
                props.navigation.replace('Login')
            }else{
                setIsErrReq(true)
                setMsgErrReq(res.data.message)
                console.log(res.data)
            }
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsLoader(false)
        })
    }



    return (
        <View style={{backgroundColor: "#f5f5f5", flex: 1, paddingHorizontal: 49, borderRadius: 8}}>
            {
                isLoader == true? <Loader /> : void 0
            }
            <View style={{marginTop: 35}}>
                <Heading1 text={"Daftar"} />
            </View>
            {
                isErrReq == true? <ErrorLabel msgErrReq={msgErrReq} /> : void 0
            }
            <View style={{marginTop: 32}}>
                <UsernameField onChangeValue={onChangeUsernameValue} />               
            </View>
            <View style={{marginTop: 24}}>
                <EmailField onChangeValue={onChangeEmailValue} />
            </View>
            <View style={{marginTop: 24}}>
                <PasswordField onChangeValue={onChangePassValue} />
            </View>
            <View style={{marginTop: 24}}>
                <ButtonAuth onPress={() => onSubmit()} text={"Daftar"} />
            </View>
            <View style={{marginTop: 18}}>
                <OrBox />
            </View>
            <View style={{marginTop: 18, marginBottom: 35}}>
                <ButtonSecondary onPress={() => props.navigation.replace('Login')} text={"Login"} />
            </View>
        </View>
    )
}

export default RegisterCard