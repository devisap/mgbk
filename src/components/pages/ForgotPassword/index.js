import React from 'react'
import ForgotPasswordLayout from '../../templates/ForgotPasswordLayout'

const ForgotPassword = ({navigation}) => {
    return(
        <ForgotPasswordLayout onPressLogin={() => navigation.replace('Login')} onPressForgot={() => alert("tes")} />
    )
}

export default ForgotPassword