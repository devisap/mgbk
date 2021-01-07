import React from 'react'
import { ScrollView, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'

const HomeLayout = (props) => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View style={{paddingHorizontal: 13}}>
                    <View style={{marginTop: 24, marginBottom: 12}}>
                        <MenuHomeCard onPress={props.onPressLengkapiProfil} title={"Lengkapi Profil"} content={"Lengkapi profil sebelum mengirimkan laporan"}/>
                    </View>
                    <View style={{marginVertical: 12}}>
                        <MenuHomeCard onPress={props.onPressBuatLaporan} title={"Buat Laproan"} content={"Buat laporan kegiatan untuk dikirimkan"}/>
                    </View>
                    <View style={{marginVertical: 12}}>
                        <MenuHomeCard onPress={props.onPressCetakLaporan} title={"Cetak Laporan"} content={"Cetak laporan kegiatan"}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeLayout