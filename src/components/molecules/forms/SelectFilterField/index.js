import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectFilterField = (props) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [items, setItems] = useState([
        {label: 'Item1', value: 'item1'},
        {label: 'Item2', value: 'item2'},
        {label: 'Item3', value: 'item3'},
    ])

    useEffect(() => {
        if(props.items)
            setItems(props.items)
        if(props.value)
            setSelectedItem(props.value)
    }, [])

    useEffect(() => {
    if(props.onChangeValue)
        props.onChangeValue(props.inputType ,selectedItem)        
    }, [selectedItem])

    return (
        <View>
            <DropDownPicker
                    items={items}
                    searchable={true}
                    searchablePlaceholder={props.label? `Cari ${props.label}`:`Cari Item`}
                    searchablePlaceholderTextColor="gray"
                    seachableStyle={{}}
                    defaultValue={selectedItem}
                    containerStyle={{height: 48}}
                    style={{backgroundColor: "#f5f5f5", borderRadius: 6, paddingLeft: 16}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    labelStyle={{fontFamily: "Lato", color:"#4a4a4a", fontSize: 16}}
                    // dropDownStyle={{borderWidth: 1}}
                    onChangeItem={item => setSelectedItem(item.value)}
                    zIndex={1}
                    placeholder={props.label? props.label : "item"}
                    placeholderStyle={{color: "#4a4a4a"}}
                    showArrow={false}
                    // onOpen={() => setColorFocused('#48CAE4')}
                    // onClose={() => setColorFocused('#DBDBDB')}
                />
                <View style={{position: "absolute", right: 16, top: 13}}>
                    <Icon name="chevron-down" size={16} color="#4a4a4a" />
                </View>
        </View>
    )
}

export default SelectFilterField