import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import ReportCard from '../../organisms/ReportCard'
import Heading3 from '../../atoms/texts/Heading3';
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack';
import DateFunction from '../../../utils/DateFunction'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ImgNoData from '../../../assets/images/no_data.svg'
import Loader from '../../molecules/Loader'
import RNFetchBlob from 'rn-fetch-blob'
import { useSelector } from 'react-redux';

const DailyReportLayout = () => {
    // set mode date
    const [mode, setMode] = useState('date');
    // date daily
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(DateFunction(new Date()))
    const [show, setShow] = useState(false);
    
    const [isFetched, setIsFetched] = useState(false)
    const [reports, setReports] = useState()
    const [isReportEmpty, setIsReportEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const globalState = useSelector(state => state.ProfilesReducer.datas)


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        
        setDate(currentDate);
        setDateString(DateFunction(currentDate));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
        
    };

    const showDatepicker = () => {
        showMode('date');
    };

    useEffect(() => {
        getReport()
    }, [date])

    const getReport = async() => {
        setIsFetched(false)
        const dataUser = JSON.parse(await AsyncStorage.getItem('DATA_USER'))
        const tglTransaksi = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        axios({
            url: `https://api-mgbk.bgskr-project.my.id/report/by-date/${tglTransaksi}`,
            method: 'get',
            params: {
                id_user: dataUser.id_user,
                id_sekolah: dataUser.id_sekolah
            }
        })
        .then(res => {
            if(res.data.status){
                const lstData = res.data.data.map((obj, id) => 
                    <View key={id} style={{marginTop: 24}}>
                        <ReportCard title={obj.kegiatan} content={obj.uraian} date={DateFunction(new Date(obj.tgl_transaksi))}/>
                    </View>    
                )
                setReports(lstData)
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
            const tglTransaksi = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    
            const android = RNFetchBlob.android
            let dirs = RNFetchBlob.fs.dirs
            RNFetchBlob.config({
                fileCache : true,
                // android only options, these options be a no-op on IOS
                addAndroidDownloads : {
                  // Show notification when response data transmitted
                  notification : true,
                  // Title of download notification
                  title : 'Download Success !',
                  // File description (not notification description)
                  description : 'PDF CUY.',
                  mime : 'application/pdf',
                  // Make the file scannable  by media scanner
                  mediaScannable : true,
                },
                path : dirs.DownloadDir + `/Laporan Harian - ${globalState.nama_lengkap}.pdf`
              })
              .fetch('GET', `https://api-mgbk.bgskr-project.my.id/print-report/by-date/${tglTransaksi}?id_user=${globalState.id_user}&id_sekolah=${globalState.id_sekolah}`)
              .then(res => {
                android.actionViewIntent(res.path(), 'application/pdf')
                console.log(res.path())
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
                    <View  style={{paddingHorizontal: 32, marginBottom: 24}}>
                        {
                            isLoading == true&& <Loader />
                        }
                        {/* <View style={{marginTop: 39}}>
                            <Text style={{fontFamily: "Lato", fontSize: 16, color: "#4a4a4a"}}>Laporan Sekolah: SMK NEGERI 4 MALANG</Text>
                        </View> */}
                        <View style={{marginTop: 24, marginBottom: 12}}>
                            <TouchableOpacity onPress={() => showDatepicker()} style={{flex: 1, backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}>
                                <View style={{marginVertical: 16}}>
                                    <Heading3 text={dateString} />
                                    <View style={{position: "absolute", right: 16}}>
                                        <IcCalendarBlack />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        { show && (
                            <DateTimePicker
                            testID="dateTimePicker1"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                        {
                            isFetched == false?
                            <SkeletonPlaceholder>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: '100%', height: 135, borderRadius: 8}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: '100%', height: 135, borderRadius: 8}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: '100%', height: 135, borderRadius: 8}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: '100%', height: 135, borderRadius: 8}} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <View style={{width: '100%', height: 135, borderRadius: 8}} />
                                </View>
                            </SkeletonPlaceholder>
                            :
                            <View>
                                {
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

export default DailyReportLayout