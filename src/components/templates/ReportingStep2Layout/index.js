import React from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import ButtonSuccess from '../../atoms/buttons/ButtonSuccess'
import Heading2 from '../../atoms/texts/Heading2'
import Label from '../../atoms/texts/Label'
import BasicField from '../../molecules/forms/BasicField'
import UploadField from '../../molecules/forms/UploadField'
import StepStatus from '../../molecules/StepStatus'
import Navbar from '../Navbar'

const ReportingStep2Layout = () => {
    return (
        <View>
            <ScrollView>
                <View style={{paddingHorizontal: 32, marginBottom: 100}}>
                    <View style={{marginTop: 24}}>
                        <StepStatus stepStatus={"2"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <Heading2 text={"Kegiatan"} />
                    </View>
                    <View style={{marginTop: 32}}>
                        <BasicField label={"Sasaran Kegiatan"} placeholder={"Sasaran Kegiatan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Kegiatan"} placeholder={"Kegiatan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Satuan Kegiatan"} placeholder={"Satuan Kegiatan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <View style={{flex: 1}}>
                            <Label text={"Uraian"} />
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, marginTop: 8, paddingHorizontal: 10}}>
                                    <View style={{marginTop:5}}>
                                        <TextInput style={{fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={"Uraian"} selectionColor={"#48CAE4"} multiline={true} numberOfLines={10} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 24}}>
                        <UploadField label={"Dokumen Kegiatan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Pelaporan"} placeholder={"Pelaporan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Durasi"} placeholder={"Durasi"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Satuan Waktu"} placeholder={"Satuan Waktu"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Jumlah Pertemuan"} placeholder={"Jumlah Pertemuan"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <BasicField label={"Ekuivalen"} placeholder={"Ekuivalen"} />
                    </View>
                    <View style={{marginTop: 24}}>
                        <ButtonSuccess text={"Simpan"} />
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default ReportingStep2Layout