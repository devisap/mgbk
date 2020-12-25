import React from 'react'
import { ScrollView, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'
import Navbar from '../Navbar'

const HomeLayout = () => {
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View>
                    <Navbar pageName={"Home"} />
                </View>
                <View style={{paddingHorizontal: 13}}>
                    <View style={{marginTop: 24, marginBottom: 12}}>
                        <MenuHomeCard title={"Lengkapi Profil"} content={"Lengkapi profil sebelum mengirimkan laporan"}/>
                    </View>
                    <View style={{marginVertical: 12}}>
                        <MenuHomeCard title={"Buat Laproan"} content={"Buat laporan kegiatan untuk dikirimkan"}/>
                    </View>
                    <View style={{marginVertical: 12}}>
                        <MenuHomeCard title={"Cetak Laporan"} content={"Cetak laporan kegiatan"}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeLayout