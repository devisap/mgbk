import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SelectFilterField from '../../molecules/forms/SelectFilterField'
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import {getFullDate} from '../../../utils/DateFunction'
import ImgNoData from '../../../assets/images/no_data.svg'
import ReportEkuivalen from '../../organisms/ReportEkuivalen'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import axios from 'axios'
import RNFetchBlob from 'rn-fetch-blob'
import { useSelector } from 'react-redux'
import Loader from '../../molecules/Loader'
import ReportCard from '../../organisms/ReportCard'

const WeeklyReportLayout = () => {
    const [week, setWeek] = useState('');
    const [weeks, setWeeks] = useState([]);
    const [year, setYear] = useState('')
    const [years, setYears] = useState([])
    const [reports, setReports] = useState()

    const [isFetched, setIsFetched] = useState(false)
    const [isReportEmpty, setIsReportEmpty] = useState(false)
    const [isMDFetched, setIsMDFetched] = useState(false)
    const [isMDWFetched, setIsMDWFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const globalState = useSelector(state => state.ProfilesReducer.datas)

    useEffect(() => {
        getMasterData()
    }, [])

    useEffect(() => {
        getMasterDataWeeks()
    }, [year])

    useEffect(() => {
        fetchData()
    }, [week])

    const onChangeValueWeek = value => {
        setWeek(value)
    }
    const onChangeValueYear = value => {
        setYear(value)
    }

    const getMasterData = async() => {
        axios({
            url: 'https://api-mgbk.bgskr-project.my.id/data-master/getYears',
            method: 'get'
        })
        .then(res => {
            const lstYear = res.data.data.map(obj => ({label: obj.tahun, value: obj.tahun}))
            setYears(lstYear)

            const y  = ""+new Date().getFullYear()
            setYear(y)
            getMasterDataWeeks()
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsMDFetched(true)
        })
    }

    const getMasterDataWeeks = async() => {
        setIsMDWFetched(false)
        axios({
            url: `https://api-mgbk.bgskr-project.my.id/report/load-weeks`,
            params: {
                year: year
            },
            method: 'get'
        })
        .then(res => {
            const lstWeeks = res.data.data.map(obj => ({label: obj.week, value: obj.id}))
            setWeeks(lstWeeks)
            const w = res.data.data[0].id
            setWeek(w)
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsMDWFetched(true)
        })
    }

    const fetchData = async() => {
        setIsFetched(false)
        axios({
            url: `https://api-mgbk.bgskr-project.my.id/report/by-week`,
            params: {
                id_user: globalState.id_user,
                id_sekolah: globalState.id_sekolah,
                id_week: week, 
                year: year
            },
            method: 'get',
        })
        .then(res => {
            if(res.data.status){
                const lstReport = res.data.data.map((obj, id) => 
                    <View key={id} style={{marginTop: 24, zIndex: -1}}>
                        <ReportCard title={obj.kegiatan} content={obj.uraian} date={getFullDate(new Date(obj.tgl_transaksi))}/>
                    </View>   
                )
                setReports(lstReport)
                setIsReportEmpty(false)
            }else{
                setIsReportEmpty(true)
            }

        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            setIsFetched(true)
        })

    }

    const printReport = async() => {
        if(!isReportEmpty){
            setIsLoading(true)
            axios({
                url: `https://api-mgbk.bgskr-project.my.id/print-report/by-week`,
                params: {
                    id_user: globalState.id_user,
                    id_sekolah: globalState.id_sekolah,
                    id_week: week, 
                    year: year
                },
                method: 'get'
            })
            .then(res => {
                console.log(res)
                const fileName = res.data.data.split('/')[3]
                const android = RNFetchBlob.android
                let dirs = RNFetchBlob.fs.dirs
                RNFetchBlob.config({
                    fileCache : true,
                    // android only options, these options be a no-op on IOS
                    addAndroidDownloads : {
                        useDownloadManager : true,
                        title : fileName,
                        description : `${fileName} berhasil dicetak`,
                        mime : 'application/pdf',
                        mediaScannable : true,
                        notification : true,
                        path : `${dirs.DownloadDir}/${fileName}`
                    },
                  })
                  .fetch('GET', `https://api-mgbk.bgskr-project.my.id/${res.data.data}`)
                  .then(res => {
                    alert('Berhasil mencetak laporan!')
                  })
            })
            .catch(err => {
                alert(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
            
        }else{
            Alert.alert(
                "Info",
                "Tidak ada data",
                [
                    { text: "OK", onPress: () => '' }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{flex: 1, paddingHorizontal: 32, marginBottom: 24}}>
                        {
                            isLoading == true&& <Loader />
                        }
                        {
                            isMDFetched == false?
                            <View>
                                <SkeletonPlaceholder>
                                    <View style={{marginTop: 24}}>
                                        <View style={{width: '100%', height: 48, borderRadius: 6}} />
                                    </View>
                                </SkeletonPlaceholder>
                            </View>
                            :
                            <View>
                                <View style={{marginTop: 24}}>
                                    <SelectFilterField  items={years} value={year} label={'Pilih Tahun'} onChangeValue={onChangeValueYear}/>
                                </View>
                            </View>
                        }
                        {
                            isMDWFetched == false?
                            <SkeletonPlaceholder>
                                <View style={{marginTop: 8}}>
                                    <View style={{width: '100%', height: 48, borderRadius: 6}} />
                                </View>
                            </SkeletonPlaceholder>
                            :
                            <View>
                                <View style={{marginTop: 8}}>
                                    <SelectFilterField items={weeks} value={week} label={'Pilih Minggu'} onChangeValue={onChangeValueWeek}/>
                                </View>
                            </View>
                        }
                        {
                            isFetched == false?
                                <SkeletonPlaceholder>
                                    <View style={{marginTop: 36, width: '100%', height: 180, borderRadius: 6}} />
                                </SkeletonPlaceholder>
                            :
                                isReportEmpty == false?
                                    reports
                                :
                                    <View style={{marginTop: 24, alignItems: 'center'}}>
                                        <ImgNoData width={150} height={150} />
                                        <View style={{marginTop: 24}}>
                                            <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20}}>Tidak ada data</Text>
                                        </View>
                                    </View>
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={{borderTopWidth: 1.5, borderTopColor: 'rgba(10, 10, 10, 0.15)'}}>
                <View style={{marginVertical: 16, marginHorizontal: 32}}>
                    <ButtonSubmit title={"Cetak Semua"} onPress={() => printReport()} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box : {
        
        backgroundColor: "#F5F5F5", 
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 5,
        marginTop: 5,
        marginHorizontal: -10
    }
})


export default WeeklyReportLayout