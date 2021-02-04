import React, {useState, useEffect
} from 'react'
import { View } from 'react-native'
import ButtonSecondary from '../../atoms/buttons/ButtonSecondary'
import Heading1 from '../../atoms/texts/Heading1'
import ButtonAuth from '../../molecules/buttons/ButtonAuth'
import EmailField from '../../molecules/forms/EmailField'
import PasswordField from '../../molecules/forms/PasswordField'
import RememberMeField from '../../molecules/forms/RememberMeField'
import OrBox from '../../molecules/OrBox'
import ValidationComponent from 'react-native-form-validator'
import Loader from '../../molecules/Loader'
import axios from 'axios'
import ErrorLabel from '../../molecules/ErrorLabel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const LoginCard = (props) => {
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [isLoader, setIsLoader] = useState(false)
    const [isErrReq, setIsErrReq] = useState(false)
    const [msgErrReq, setMsgErrReq] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('t')

    onChangeEmailValue = (value) => {setEmailValue(value)}
    onChangePassValue = (value) => {setPassValue(value)}
    onSubmit = () => {
        setIsLoader(true)
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/login',
            method: 'post',
            data: {
                email: emailValue,
                password: passValue
            }
        })
        .then((res) => {
            if(res.data.status){
                setIsErrReq(false)
                setMsgErrReq('')
                storeData(res.data.data.id_user, res.data.data.email)
                props.navigation.replace('Home')
            }else{
                setIsErrReq(true)
                setMsgErrReq(res.data.message)
            }
            setIsLoader(false)
        })
    }

    const storeData = async(id_user, email) => {
        try {
            await AsyncStorage.setItem('ID_USER', ""+id_user)
            await AsyncStorage.setItem('EMAIL', ""+email)
            await AsyncStorage.setItem('IS_LOGGED_IN', 'y')
        } catch (error) {
            alert(error)
        }
    }

    const getData = async() => {
        try {
            let IS_LOGGED_IN = await AsyncStorage.getItem('IS_LOGGED_IN')
            if(IS_LOGGED_IN !== null && IS_LOGGED_IN == 'y') {
                props.navigation.replace('Home')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <View style={{backgroundColor: "#f5f5f5", flex: 1, paddingHorizontal: 49, borderRadius: 8}}>
            {
                isLoader == true? <Loader /> : void 0
            }
            <View style={{marginTop: 35}}>
                <Heading1 text={"Login"} />
            </View>
            { 
                isErrReq == true? 
                <ErrorLabel msgErrReq={msgErrReq} />
                :
                void 0
            }
            <View style={{marginTop: 32}}>
                <EmailField onChangeValue={onChangeEmailValue} />
            </View>
            <View style={{marginTop: 24}}>
                <PasswordField onChangeValue={onChangePassValue} />
            </View>
            {/* <View style={{marginTop: 24}}>
                <RememberMeField />               
            </View> */}
            <View style={{marginTop: 24}}>
                <ButtonAuth text={"Login"} onPress={() => onSubmit()} />
            </View>
            <View style={{marginTop: 18}}>
                <OrBox />
            </View>
            <View style={{marginTop: 18, marginBottom: 35}}>
                <ButtonSecondary text={"Daftar"} onPress={() => props.navigation.replace('Register')} />
            </View>
        </View>
    )
}

export default LoginCard