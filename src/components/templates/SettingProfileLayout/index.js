import React from 'react'
import { View, TextInput, ScrollView } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import Heading2 from '../../atoms/texts/Heading2'
import Label from '../../atoms/texts/Label'
import BasicField from '../../molecules/forms/BasicField'
import PasswordFieldWithIcon from '../../molecules/forms/PasswordFieldWithIcon'
import Navbar from '../Navbar'

const SettingProfileLayout = () => {
    return (
        <View>
            <Navbar pageName={"Pengaturan Profil"} />
            <ScrollView>
                <View style={{paddingHorizontal: 17}}>
                    <View style={{marginTop: 24}}>
                        <Heading2 text={"Perbarui Profile"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <BasicField label={"Nama Lengkap"} placeholder={"Nama Lengkap"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Asal Sekolah"} placeholder={"Asal Sekolah"} />
                    </View>
                    <View style={{flex: 1, borderColor: "#4a4a4a", borderStyle: "solid", borderWidth: 1, marginTop: 18}}></View>
                    <View style={{marginTop: 18}}>
                        <BasicField label={"Username"} placeholder={"Username"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Email"} placeholder={"Email"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <PasswordFieldWithIcon />
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