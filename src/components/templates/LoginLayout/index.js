import React from 'react'
import { ScrollView, View } from 'react-native'
import LoginCard from '../../organisms/LoginCard'
import Footer from '../Footer'

const LoginLayout = (props) => {

    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <LoginCard navigation={props.navigation} />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 71, marginBottom: 24}}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginLayout