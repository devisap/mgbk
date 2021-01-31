import React, {useRef, useState, useEffect} from 'react'
import { TextInput, View } from 'react-native'
import Label from '../../../atoms/texts/Label'

const PasswordField = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const input = useRef()
    useEffect(() => {
        setIsFocus(props.isFocus)
        // if(!input.current.isFocused())
        //     setIsFocus(false)
        if(isFocus)
            input.current.focus()
        // if(!input.current.isFocused()){
        //     setIsFocus(false)
        // }else{
        //     setIsFocus(true)
        // }
    })
    return (
        <View style={{flex: 1}}>
            <Label text={"Password"} />
            <View style={{flex: 1, flexDirection: 'row'}}>
                {
                    isFocus == true?
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#48CAE4', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <View style={{marginLeft: 10, marginTop: 5}}>
                            <TextInput ref={input} secureTextEntry={true} style={{fontFamily: "Lato", color: '#000', fontSize: 16, lineHeight: 24, marginRight: 24}} placeholder={"Password"} selectionColor={"#48CAE4"}/>
                        </View>
                    </View>
                    :
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                        <View style={{marginLeft: 10, marginTop: 5}}>
                            <TextInput ref={input} secureTextEntry={true} style={{fontFamily: "Lato", color: '#000', fontSize: 16, lineHeight: 24, marginRight: 24}} placeholder={"Password"} selectionColor={"#48CAE4"}/>
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}

export default PasswordField