import React, { useState } from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Label from '../../../atoms/texts/Label';

const SelectField = (props) => {
    const [selectItem, setSelectedItem] = useState('uk');
    const [colorFocused, setColorFocused] = useState('#DBDBDB')
    return (
        <View>
            <Label text={props.label? props.label : ''} />
            <View style={{marginTop: 8}}>
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa'},
                        {label: 'UK', value: 'uk'},
                        {label: 'France', value: 'france'},
                    ]}
                    searchable={true}
                    searchablePlaceholder={props.label? `Cari ${props.label}`:`Cari Item`}
                    searchablePlaceholderTextColor="gray"
                    seachableStyle={{}}
                    // defaultValue={selectItem}
                    containerStyle={{height: 38}}
                    style={{borderWidth: 1, borderColor: colorFocused}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    labelStyle={{fontFamily: "Lato", color:"#4a4a4a", fontSize: 16}}
                    dropDownStyle={{borderWidth: 1, borderColor: colorFocused}}
                    onChangeItem={item => setSelectedItem(item.value)}
                    zIndex={1}
                    placeholder={"Kegiatan"}
                    placeholderStyle={{color: "#bdbdbd"}}
                    showArrow={false}
                    onOpen={() => setColorFocused('#48CAE4')}
                    onClose={() => setColorFocused('#DBDBDB')}
                />
                <View style={{position: "absolute", right: 16, top: 10}}>
                    <Icon name="chevron-down" size={16} color="#48CAE4" />
                </View>
            </View>
        </View>
    )
}

export default SelectField