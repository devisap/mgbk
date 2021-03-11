import React from 'react'
import { View } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import Heading2 from '../../atoms/texts/Heading2'
import BasicField from '../../molecules/forms/BasicField'

const AddSchool = () => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <View style={{paddingHorizontal: 32}}>
                <View style={{marginTop: 24}}>
                    <Heading2 text={"Tambahkan Sekolah"} />
                </View>
                <View style={{marginTop: 32}}>
                    <BasicField label={"Nama Sekolah"} placeholder={"Nama Sekolah"} />
                </View>
                <View style={{marginTop: 24}}>
                    <ButtonSuccess text={"Simpan"} onPress={() => postData()} />
                </View>
            </View>
        </View>
    )
}

export default AddSchool