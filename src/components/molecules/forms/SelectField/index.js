import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Label from '../../../atoms/texts/Label';

const SelectField = (props) => {
    const [selectItem, setSelectedItem] = useState('uk');
    const [colorFocused, setColorFocused] = useState('#DBDBDB')
    const [items, setItems] = useState([
        {label: 'Item1', value: 'item1'},
        {label: 'Item2', value: 'item2'},
        {label: 'Item3', value: 'item3'},
    ])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api-mgbk.bgskr-project.my.id/activity'
        })
        .then(function(res){
            console.log(res.data.data)
            const listData = res.data.data.map(obj => ({label: obj.kegiatan, value: obj.id_kegiatan}))
            setItems(listData)
        })
    }, [])

    return (
        <View>
            <Label text={props.label? props.label : ''} />
            <View style={{marginTop: 8}}>
                <DropDownPicker
                    items={items}
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
                    placeholder={props.label? props.label : "item"}
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