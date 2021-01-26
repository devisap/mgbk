import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import IcCalendarBlack from '../../../atoms/icons/IcCalendarBlack'
import Heading3 from '../../../atoms/texts/Heading3'
import DateFunction from '../../../../utils/DateFunction'
import DateTimePicker from '@react-native-community/datetimepicker';
import Label from '../../../atoms/texts/Label'
import IcDropdown from '../../../atoms/icons/IcDropdown'
import Heading2 from '../../../atoms/texts/Heading2'

const DateField = (props) => {
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
        <View>
            <Label text={props.label} />
            <View style={{marginTop: 8}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => showDatepicker()} style={{flex: 1, borderColor: '#DBDBDB', borderWidth: 1, borderRadius: 6, paddingLeft: 16}}>
                    <View>
                        <Text style={{fontFamily: "Lato", fontSize: 20, color: "#242424", marginVertical: 7}}>{dateString}</Text>
                        <View style={{position: "absolute", right: 16, top: 15}}>
                            <IcDropdown />
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
        </View>
        
    )
}
export default DateField