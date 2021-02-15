
import React from 'react'
import { View, ScrollView } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import ProfileForm from '../../organisms/ProfileForm'

const SettingProfileLayout = (props) => {
    return (
        <View>
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginBottom: 100}}>
                    <View style={{marginTop: 24}}>
                        <Heading2 text={"Perbarui Profile"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <ProfileForm navigation={props.navigation} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingProfileLayout