import React from 'react'
import { View } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'
import UploadField from '../../molecules/forms/UploadField'

const ProfileForm = () => {
    return (
        <View>
            <View>
                <BasicField label={"Nama Lengkap"} placeholder={"Nama Lengkap"} />
            </View>
            <View style={{marginTop: 24}}>
                <UploadField label={"Foto Profil"} />
            </View>
            <View style={{marginTop: 24}}>
                <BasicField label={"Asal Sekolah"} placeholder={"Asal Sekolah"} />
            </View>
            <View style={{marginTop: 24}}>
                <UploadField label={"Logo Sekolah"} />
            </View>
        </View>
    )
}

export default ProfileForm