import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import RegisterCard from '../../organisms/RegisterCard'

const RegisterLayout = (props) => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: 'row', paddingHorizontal: 17, alignItems: 'center'}}>
            <ScrollView>
                <RegisterCard navigation={props.navigation} />
                <View style={{alignItems: 'center', marginTop: 71, marginBottom: 24}}>
                    <Text style={{fontFamily: 'Lato', fontSize: 16, color: '#4a4a4a'}}>{'\u00A9'} MGBK SMA Kota Malang</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 24}}>
                        <Image source={require('../../../assets/images/logo_mgbk.png')} style={{width: 50, height: 50}} />
                        <View>
                            <View style={{flex: 1, borderWidth: 0.5, marginHorizontal: 16}}  />
                        </View>
                        <Image source={require('../../../assets/images/logostiki.png')} style={{width: 50, height: 50}} />
                    </View>
                </View>
            </ScrollView>
        </View>
        // <LoginCard />
    )
}

export default RegisterLayout