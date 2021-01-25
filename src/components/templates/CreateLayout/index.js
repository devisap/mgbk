import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'
import DateFunction from '../../../utils/DateFunction'
import ReportCard from '../../organisms/ReportCard'
import DateField from '../../molecules/forms/DateField'

const CreateLayout = () => {
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
                        <View style={{marginTop: 36}}>
                            <ReportCard title={"Kegiatan A"} date={"22 Desember 2020"}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
            
    )
}

export default CreateLayout