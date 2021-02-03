import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView, View } from 'react-native'
import MenuHomeCard from '../../organisms/MenuHomeCard'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const HomeLayout = (props) => {
    const [isProfileVerified, setIsProfileVerified] = useState(false)
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/user/profile/'+7,
            method: 'get'
        })
        .then((res) => {
            setIsProfileVerified(res.data.status)
            setIsFetched(true)
        })
    })

    return (
        <View>
            <ScrollView>
                <View style={{flex: 1, paddingHorizontal: 13}}>
                    {
                        isFetched == false?
                        <View>
                            <SkeletonPlaceholder>
                                <View style={{marginTop: 24, marginBottom: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                                <View style={{marginVertical: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                                <View style={{marginVertical: 12}}>
                                    <View style={{width: '100%', height: 180, borderRadius: 4}}></View>
                                </View>
                            </SkeletonPlaceholder>
                        </View>
                        :
                        <View>
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
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeLayout