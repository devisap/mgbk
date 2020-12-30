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
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(date.getFullYear())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        // setDateString(DateFunction(currentDate))
        console.log(`${currentDate.getDate()} ${currentDate.getMonth()} ${currentDate.getUTCFullYear()}`)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Navbar pageName={"Laporan"} />
                <View  style={{paddingHorizontal: 32}}>
                    <View style={{marginTop: 24}}>
                        <View style={{flexDirection: 'row',backgroundColor: "#f5f5f5", borderRadius: 6, alignItems: 'center', paddingLeft: 10}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{  flex: 1, height: 50,  borderRadius: 6}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
                    <View style={{marginTop: 8}}>
                        <TouchableOpacity onPress={showDatepicker} style={{flex: 1, backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}>
                            <View style={{marginVertical: 16}}>
                                <Heading3 text={dateString} />
                                <View style={{position: "absolute", right: 16}}>
                                    <IcCalendarBlack />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    {/* <View>
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
                    <View>
                        <Button onPress={showTimepicker} title="Show time picker!" />
                    </View>
                    </View> */}
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