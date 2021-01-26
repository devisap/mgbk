import React, { useState } from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import IcDropdown from '../../../atoms/icons/IcDropdown';
import Label from '../../../atoms/texts/Label';

const SelectField = (props) => {
    const [selectItem, setSelectedItem] = useState('uk');
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
                    searchablePlaceholder="Search for an item"
                    searchablePlaceholderTextColor="gray"
                    seachableStyle={{}}
                    // defaultValue={selectItem}
                    containerStyle={{height: 40}}
                    style={{borderWidth: 1, borderColor: "#DBDBDB"}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    labelStyle={{fontFamily: "Lato", color:"#4a4a4a", fontSize: 20}}
                    dropDownStyle={{borderWidth: 1, borderColor: "#DBDBDB"}}
                    onChangeItem={item => setSelectedItem(item.value)}
                    zIndex={1}
                    placeholder={"Kegiatan"}
                    placeholderStyle={{color: "#bdbdbd"}}
                    showArrow={false}
                />
                <View style={{position: "absolute", right: 16, top: 15}}>
                    <IcDropdown />
                </View>
            </View>
        </View>
    )
}

export default SelectField