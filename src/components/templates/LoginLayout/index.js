import React from 'react'
import { ScrollView, View } from 'react-native'
import LoginCard from '../../organisms/LoginCard'
import Footer from '../Footer'

const LoginLayout = () => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <LoginCard />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 71, marginBottom: 24}}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
        // <LoginCard />
    )
}

export default LoginLayout