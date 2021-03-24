import React from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import IcCalendarBlack from '../../atoms/icons/IcCalendarBlack'
import Heading3 from '../../atoms/texts/Heading3'
import SelectFilterField from '../../molecules/forms/SelectFilterField'
import ImgNoData from '../../../assets/images/no_data.svg'

const WeeklyReportLayout = () => {
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 32, marginBottom: 24}}>
                        <View style={{marginTop: 24}}>
                            <SelectFilterField label={'Pilih Tahun'} />
                        </View>
                        <View style={{marginTop: 8}}>
                            <SelectFilterField label={'Pilih Minggu'} />
                        </View>
                        <View style={{marginTop: 36, alignItems: 'center'}}>
                            <ImgNoData width={150} height={150} />
                            <View style={{marginTop: 24}}>
                                <Text style={{fontFamily: 'Lato', color: '#4a4a4a', fontSize: 20}}>Tidak ada data</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default WeeklyReportLayout