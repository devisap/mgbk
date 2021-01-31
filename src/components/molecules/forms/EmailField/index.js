import React, {useState, useEffect, useRef} from 'react'
import { TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'

const EmailField = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const input = useRef()
    useEffect(() => {
        setIsFocus(props.isFocus)
        // if(!input.current.isFocused())
        //     setIsFocus(false)
        if(isFocus)
            input.current.focus()
    })
    return (
        <View style={{flex: 1}}>
            <Label text={"Email"} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                {
                    isFocus == true?
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#48CAE4', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <Icon name="envelope" size={16} color={'#48CAE4'} />
                        <View style={{marginLeft: 10, marginTop:5}}>
                            <TextInput ref={input} style={{flex: 1, fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={"Email"} selectionColor={"#48CAE4"}/>
                        </View>
                    </View>
                    :
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <Icon name="envelope" size={16} color={'#DBDBDB'} />
                        <View style={{marginLeft: 10, marginTop:5}}>
                            <TextInput  ref={input} style={{flex: 1, fontFamily: "Lato", color: '#000', fontSize: 16, marginRight: 24}} placeholder={"Email"} selectionColor={"#48CAE4"}/>
                        </View>
                    </View>

                }
            </View>
        </View>
    )
}

export default EmailField