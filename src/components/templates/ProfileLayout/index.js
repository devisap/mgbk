import React from 'react'
import { ScrollView, View } from 'react-native'
import CircleImage from '../../atoms/images/CircleImage'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import InfoProfileCard from '../../organisms/InfoProfileCard'
import Navbar from '../Navbar'

const ProfileLayout = () => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginTop: 24}}>
                    <View style={{flexDirection: "column", alignItems: 'center'}}>
                        <CircleImage />
                    </View>
                    <View style={{marginTop: 24}}>
                        <InfoProfileCard />
                    </View>
                    <View style={{marginTop: 24}}>
                        <ButtonSubmit title={"Perbarui Profil"} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileLayout