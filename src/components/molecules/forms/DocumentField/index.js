import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Label from '../../../atoms/texts/Label'
import DocumentPicker from 'react-native-document-picker';

const DocumentField = (props) => {
    const [value, setValue] = useState([{name: ''}])
    useEffect(() => {
      if(props.onChangeValue)
        props.onChangeValue(props.inputType, value)
    }, [value])

    const pickFile = async() => {
      try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        });
        const resObj = results.map(obj => ({uri: obj.uri, type: obj.type, name: obj.name, size: obj.size}))
        setValue(resObj)
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
    }
    return(
        <View style={{flex: 1}}>
            <Label text={props.label? props.label : ""} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => pickFile()}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#F5F5F5", alignItems: 'center', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <Icon name="upload" size={16} color="#BABABA" />
                        <Text style={{fontFamily: "Lato", color: '#bababa', fontSize: 16, marginRight: 24, marginLeft: 8}}>Pilih File...</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderTopRightRadius: 4, borderBottomRightRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <TextInput style={{fontFamily: "Lato", color: '#4a4a4a', fontSize: 16}} editable={false}>{props.fileName? props.fileName: ''}</TextInput>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DocumentField