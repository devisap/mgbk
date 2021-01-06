import React, { useState } from 'react'
import { Button, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonSubmit from '../../molecules/buttons/ButtonSubmit'
import DailyReportCard from '../../organisms/DailyReportCard'
import Navbar from '../Navbar'
import IcPlusWhite from '../../../components/atoms/icons/IcPlusWhite'
import IcPolygonBlack from '../../atoms/icons/IcPolygonBlack';
import Heading3 from '../../atoms/texts/Heading3';
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack';
import DateFunction from '../../../utils/DateFunction'

const DailyReportLayout = () => {
    const [selectedValue, setSelectedValue] = useState("Harian");
    const [isWeekPeriod, setIsWeekPeriod] = useState(false);
    // === DATE FIELD === 
    // set mode date
    const [mode, setMode] = useState('date');
    // date daily
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(DateFunction(new Date()))
    const [show, setShow] = useState(false);
    // date startWeek
    const [dateStartWeek, setDateStartWeek] = useState(new Date());
    const [dateStartWeekString, setDateStartWeekString] = useState(DateFunction(new Date()))
    const [showDateStartWeek, setShowDateStartWeek] = useState(false);
    // date endWeek
    const [dateEndWeek, setDateEndWeek] = useState(new Date());
    const [dateEndWeekString, setDateEndWeekString] = useState(DateFunction(new Date()))
    const [showDateEndWeek, setShowDateEndWeek] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        
        setDate(currentDate);
        setDateString(DateFunction(currentDate));
    };
    
    const onChangeStartWeek = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDateStartWeek(Platform.OS === 'ios');
        
        setDateStartWeek(currentDate);
        setDateStartWeekString(DateFunction(currentDate));
    };
    
    const onChageEndWeek = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDateEndWeek(Platform.OS === 'ios');
        
        setDateEndWeek(currentDate);
        setDateEndWeekString(DateFunction(currentDate));
    };

    const showMode = (currentMode, typeDate) => {
        switch(typeDate){
            case "daily":
                setShow(true);
                setMode(currentMode);
                break;
            case "startWeek":
                console.log("shoow start")
                setShowDateStartWeek(true);
                setMode(currentMode);
                break;
            case "endWeek":
                console.log("shoow end")
                setShowDateEndWeek(true);
                setMode(currentMode);
                break;
        }
        
    };

    const showDatepicker = (typeDate) => {
        showMode('date', typeDate);
    };

    const onChangePicker = (itemValue) => {
        setSelectedValue(itemValue)
        if(itemValue == "Harian"){
            setIsWeekPeriod(false);
            setShowDateStartWeek(false)
            setShowDateEndWeek(false)
        }else{
            setIsWeekPeriod(true);
            setShow(false);
        }
    }
    
    return (
        <View style={{flex: 1}}>
            <Navbar pageName={"Laporan"} />
            <ScrollView>
                <View  style={{paddingHorizontal: 32}}>
                    <View style={{marginTop: 24}}>
                        <View style={{flexDirection: 'row',backgroundColor: "#f5f5f5", borderRadius: 6, alignItems: 'center', paddingLeft: 10}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{  flex: 1, height: 50,  borderRadius: 6}}
                                onValueChange={(itemValue, itemIndex) => onChangePicker(itemValue)}
                                mode={"dropdown"}
                                itemStyle={{color: "#4a4a4a", fontSize: 45, fontWeight: 'bold'}}
                            >
                                <Picker.Item label="Periode : Harian" value="Harian" />
                                <Picker.Item label="Periode : Mingguan" value="Mingguan" />
                            </Picker>
                            <View style={{position: 'absolute', right: 16}}>
                                <IcPolygonBlack />
                            </View>
                        </View>
                    </View>
                    {isWeekPeriod == false?
                        <View style={{marginTop: 8}}>
                            <TouchableOpacity onPress={() => showDatepicker("daily")} style={{flex: 1, backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}>
                                <View style={{marginVertical: 16}}>
                                    <Heading3 text={dateString} />
                                    <View style={{position: "absolute", right: 16}}>
                                        <IcCalendarBlack />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <View style={{marginTop: 8}}>
                                <TouchableOpacity onPress={() => showDatepicker("startWeek")} style={{flex: 1, backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}>
                                    <View style={{marginVertical: 16}}>
                                        <Heading3 text={"Tanggal Mulai : "+dateStartWeekString} />
                                        <View style={{position: "absolute", right: 16}}>
                                            <IcCalendarBlack />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 8}}>
                                <TouchableOpacity onPress={() => showDatepicker("endWeek")} style={{flex: 1, backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}>
                                    <View style={{marginVertical: 16}}>
                                        <Heading3 text={"Tanggal Selesai : "+dateEndWeekString} />
                                        <View style={{position: "absolute", right: 16}}>
                                            <IcCalendarBlack />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                       
                    }
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
                    { showDateStartWeek && (
                        <DateTimePicker
                        testID="dateTimePicker1"
                        value={dateStartWeek}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeStartWeek}
                        />
                    )}
                    { showDateEndWeek && (
                        <DateTimePicker
                        testID="dateTimePicker1"
                        value={dateEndWeek}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChageEndWeek}
                        />
                    )}
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
            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: "#48CAE4", width: 75, height: 75, borderRadius: 75, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 24, right: 24}} onPress={() => {}}>
                <IcPlusWhite />
            </TouchableOpacity>
        </View>
    )
}

export default DailyReportLayout