import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DateFunction from '../../../../utils/DateFunction'
import DateTimePicker from '@react-native-community/datetimepicker';
import Label from '../../../atoms/texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'

const DateField = (props) => {
    // set mode date
    const [mode, setMode] = useState('date');
    // date daily
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(DateFunction(new Date()))
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(props.onChangeValue)
            props.onChangeValue(props.inputType, date)
    }, [date])

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
                <TouchableOpacity activeOpacity={0.5} onPress={() => showDatepicker()}>
                    <View style={{flex: 1, height: 48, borderColor: '#DBDBDB', borderWidth: 1, borderRadius: 6, paddingLeft: 16, justifyContent: 'center'}}>
                        <Text style={{fontFamily: "Lato", fontSize: 16, color: "#242424", marginVertical: 7}}>{dateString}</Text>
                        <View style={{position: "absolute", right: 16, top: 13}}>
                            <Icon name="chevron-down" size={16} color="#48CAE4" />
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