import React from 'react'
import { View, ScrollView } from 'react-native'
import Footer from '../../atoms/icons/Footer'
import ForgotPasswordCard from '../../organisms/ForgotPasswordCard'

const ForgotPasswordLayout = (props) => {
    return(
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <ForgotPasswordCard onPressLogin={props.onPressLogin} onPressForgot={props.onPressForgot} />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 71, marginBottom: 24}}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

export default ForgotPasswordLayout