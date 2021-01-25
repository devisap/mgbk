import React from 'react'
import { View, TextInput, ScrollView, Text } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import IcUpload from '../../atoms/icons/IcUpload'
import Heading2 from '../../atoms/texts/Heading2'
import Label from '../../atoms/texts/Label'
import BasicField from '../../molecules/forms/BasicField'
import PasswordFieldWithIcon from '../../molecules/forms/PasswordFieldWithIcon'
import UploadField from '../../molecules/forms/UploadField'
import ProfileForm from '../../organisms/ProfileForm'
import Navbar from '../Navbar'

const SettingProfileLayout = () => {
    return (
        <View>
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginBottom: 100}}>
                    <View style={{marginTop: 24}}>
                        <Heading2 text={"Perbarui Profile"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <ProfileForm />
                    </View>
                    <View style={{marginTop: 24}}>
                        <ButtonSuccess text={"Simpan"} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingProfileLayout