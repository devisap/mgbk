import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import RegisterCard from '../../organisms/RegisterCard'

const RegisterLayout = (props) => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <RegisterCard navigation={props.navigation} />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 71, marginBottom: 24}}>
                    <Text style={{fontFamily: 'Lato', fontSize: 16, color: '#4a4a4a'}}>{'\u00A9'} MGBK SMA Kota Malang</Text>
                </View>
            </ScrollView>
        </View>
        // <LoginCard />
    )
}

export default RegisterLayout