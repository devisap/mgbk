import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView, Text, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'

const HomeLayout = (props) => {
    const [isProfileVerified, setIsProfileVerified] = useState(false)

    useEffect(() => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+8,
            method: 'get'
        })
        .then((res) => {
            setIsProfileVerified(res.data.status)
        })
    })

    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View style={{paddingHorizontal: 13}}>
                    {
                        isProfileVerified == false?
                            <View style={{marginTop: 24, marginBottom: 12}}>
                                <MenuHomeCard onPress={props.onPressLengkapiProfil} title={"Lengkapi Profil"} content={"Lengkapi profil sebelum mengirimkan laporan"}/>
                            </View>
                        :
                            void 0
                    }
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