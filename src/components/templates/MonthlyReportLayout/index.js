import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SelectFilterField from '../../molecules/forms/SelectFilterField'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import {getListMonth} from '../../../utils/DateFunction'
import ImgNoData from '../../../assets/images/no_data.svg'
import ReportEkuivalen from '../../organisms/ReportEkuivalen'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import axios from 'axios'

const MonthlyReportLayout = () => {
    const [month, setMonth] = useState('');
    const [months, setMonths] = useState([]);
    const [year, setYear] = useState('')
    const [years, setYears] = useState([])

    const [isFetched, setIsFetched] = useState(false)
    const [isMDFetched, setIsMDFetched] = useState(false)

    useEffect(() => {
        getMasterData()
        fetchData()
    }, [])

    const getMasterData = () => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/data-master/getYears',
            method: 'get'
        })
        .then(res => {
            setMonths(getListMonth())
            const lstYear = res.data.data.map(obj => ({label: obj.tahun, value: obj.tahun}))
            setYears(lstYear)

            const m = new Date().getMonth() + 1
            const y  = ""+new Date().getFullYear()
            setMonth(m)
            setYear(y)
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsMDFetched(true)
        })
    }

    const fetchData = () => {
        console.log('fetchdata')
    }

    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{flex: 1, paddingHorizontal: 32, marginBottom: 24}}>
                        {
                            isMDFetched == false?
                            <View>
                                <SkeletonPlaceholder>
                                    <View style={{marginTop: 24}}>
                                        <View style={{width: '100%', height: 48, borderRadius: 6}} />
                                    </View>
                                    <View style={{marginTop: 8}}>
                                        <View style={{width: '100%', height: 48, borderRadius: 6}} />
                                    </View>
                                </SkeletonPlaceholder>
                            </View>
                            :
                            <View>
                                <View style={{marginTop: 24}}>
                                    <SelectFilterField  items={years} value={year} label={'Pilih Tahun'} />
                                </View>
                                <View style={{marginTop: 8}}>
                                    <SelectFilterField items={months} value={month} label={'Pilih Bulan'} />
                                </View>
                            </View>
                        }
                        {
                            isFetched == false?
                                <View style={{marginTop: 24, alignItems: 'center'}}>
                                    <ImgNoData width={150} height={150} />
                                    <View style={{marginTop: 24}}>
                                        <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20}}>Tidak ada data</Text>
                                    </View>
                                </View>
                            :
                            <View style={{marginTop: 36, zIndex: -1}}>
                                <ReportEkuivalen />
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={{borderTopWidth: 1.5, borderTopColor: 'rgba(10, 10, 10, 0.15)'}}>
                <View style={{marginVertical: 16, marginHorizontal: 32}}>
                    <ButtonSubmit title={"Cetak Semua"} onPress={() => alert('berhasil')} />
                </View>
            </View>
        </View>
    )
}


export default MonthlyReportLayout