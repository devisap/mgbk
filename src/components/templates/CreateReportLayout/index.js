import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack'
import Heading2 from '../../atoms/texts/Heading2'
import Heading3 from '../../atoms/texts/Heading3'
import DateFunction from '../../../utils/DateFunction'
import ReportCard from '../../organisms/ReportCard'
import DateField from '../../molecules/forms/DateField'
import SelectField from '../../molecules/forms/SelectField'
import Label from '../../atoms/texts/Label'
import { TextInput } from 'react-native-gesture-handler'
import UploadField from '../../molecules/forms/UploadField'

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
                            <View style={{flex: 1}}>
                                <Label text={"Detail"} />
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, marginTop: 8, paddingHorizontal: 10}}>
                                        <View style={{marginTop:5}}>
                                            <TextInput style={{fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={"Detail"} selectionColor={"#48CAE4"} multiline={true} numberOfLines={10} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 24}}>
                            <UploadField label={"Dokumen Kegiatan"} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
            
    )
}

export default CreateReportLayout