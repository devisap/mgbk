import React, { useState } from 'react'
import { Button, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import ReportCard from '../../organisms/ReportCard'
import Navbar from '../Navbar'
import IcPlusWhite from '../../../components/atoms/icons/IcPlusWhite'
import IcPolygonBlack from '../../atoms/icons/IcPolygonBlack';
import Heading3 from '../../atoms/texts/Heading3';
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack';
import DateFunction from '../../../utils/DateFunction'

const DailyReportLayout = () => {
    // set mode date
    const [mode, setMode] = useState('date');
    // date daily
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(DateFunction(new Date()))
    const [show, setShow] = useState(false);


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
    
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View  style={{paddingHorizontal: 32}}>
                        <View style={{marginTop: 39}}>
                            <Text style={{fontFamily: "Lato", fontSize: 16, color: "#4a4a4a"}}>Laporan Sekolah: SMK NEGERI 4 MALANG</Text>
                        </View>
                        <View style={{marginTop: 24}}>
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
                        <View style={{marginTop: 36}}>
                            <ReportCard title={"Kegiatan A"} date={"22 Desember 2020"}/>
                        </View>
                        <View style={{marginTop: 24}}>
                            <ReportCard title={"Kegiatan B"} date={"22 Desember 2020"}/>
                        </View>
                        <View style={{marginTop: 24}}>
                            <ReportCard title={"Kegiatan V"} date={"22 Desember 2020"}/>
                        </View>
                        <View style={{marginTop: 24}}>
                            <ReportCard title={"Kegiatan V"} date={"22 Desember 2020"}/>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
            <View>
                <View style={{marginVertical: 16, marginHorizontal: 32}}>
                    <ButtonSubmit title={"Cetak Semua"} />
                </View>
            </View>
        </View>
    )
}

export default DailyReportLayout