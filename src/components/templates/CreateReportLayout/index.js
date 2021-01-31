import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Heading2 from '../../atoms/texts/Heading2'
import DateField from '../../molecules/forms/DateField'
import SelectField from '../../molecules/forms/SelectField'
import UploadField from '../../molecules/forms/UploadField'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import TextAreaField from '../../molecules/forms/TextAreaField'

const CreateReportLayout = () => {
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 32, marginBottom: 24}}>
                        <View style={{marginTop: 39}}>
                            <Heading2 text={"Buat Laporan"} />
                        </View>
                        <View style={{marginTop: 24}}>
                            <DateField label={"Tanggal"} />
                        </View>
                        <View style={{marginTop: 24}}>
                            <SelectField label={"Kegiatan"} />
                        </View>
                        <View style={{marginTop: 24}}>
                            <TextAreaField />
                        </View>
                        <View style={{marginTop: 24}}>
                            <UploadField label={"Dokumen Kegiatan"} />
                        </View>
                        <View style={{marginTop: 24}}>
                            <ButtonSuccess text={"Simpan"} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
            
    )
}

export default CreateReportLayout