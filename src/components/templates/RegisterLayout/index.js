import React from 'react'
import { ScrollView, View } from 'react-native'
import RegisterCard from '../../organisms/RegisterCard'
import Footer from '../Footer'

const RegisterLayout = () => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <RegisterCard />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 71}}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
        // <LoginCard />
    )
}

export default RegisterLayout