import React from 'react'
import { StyleSheet, View } from 'react-native'
import Box from '../components/atoms/Box'
import Heading1 from '../components/atoms/Heading1'
import InputText from '../components/atoms/InputText'
import InputTextWithIcon from '../components/atoms/InputTextWithIcon'
import Label from '../components/atoms/Label'

const Login = () => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={{flex: 1, paddingHorizontal: 17, justifyContent: 'center'}}>
                <View style={styles.box}>
                    <Heading1 text={"Login"} />
                    <View style={{marginTop: 32}}>
                        <Label text={"Email"}/>
                        <InputTextWithIcon style={{marginTop: 20}} />
                    </View>
                    <View style={{marginTop: 43}}>
                        <Label text={"Password"}/>
                        <InputTextWithIcon style={{marginTop: 20}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 519, 
        backgroundColor: "#f5f5f5", 
        borderRadius: 6, 
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        paddingHorizontal: 49,
        paddingVertical: 35
    }
})

export default Login