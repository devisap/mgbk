import React from 'react'
import { ScrollView, View } from 'react-native'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import DailyReportCard from '../../organisms/DailyReportCard'
import Navbar from '../Navbar'

const DailyReportLayout = () => {
    return (
        <View>
            <ScrollView>
                <Navbar pageName={"Laporan"} />
                <View  style={{paddingHorizontal: 32}}>
                    <View style={{marginTop: 36}}>
                        <DailyReportCard title={"Kegiatan A"} date={"22 Desember 2020"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        <DailyReportCard title={"Kegiatan B"} date={"22 Desember 2020"}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        <DailyReportCard title={"Kegiatan V"} date={"22 Desember 2020"}/>
                    </View>
                    <View style={{marginVertical: 24}}>
                        <ButtonSubmit title={"Cetak Semua"} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DailyReportLayout