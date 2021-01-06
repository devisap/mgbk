import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary'
import Heading2 from '../../atoms/texts/Heading2'
import StepStatus from '../../molecules/StepStatus'
import ProfileForm from '../../organisms/ProfileForm'
import Navbar from '../Navbar'

const ReportingStep1Layout = () => {
    return(
        <View>
            <Navbar pageName={"Profil"} />
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginBottom: 100}}>
                    <View style={{marginTop: 24}}>
                        <StepStatus stepStatus={"1"}/>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Heading2 text={"Profil"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <ProfileForm />
                    </View>
                    <View style={{marginTop: 72}}>
                        <ButtonPrimary text={"Selanjutnya"} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ReportingStep1Layout