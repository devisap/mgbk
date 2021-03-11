import React, {useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import TagInput from 'react-native-tags-input'
import Label from '../../../atoms/texts/Label'

const TagsField = (props) => {
    const [tags, setTags] = useState({
        tag: '',
        tagsArray: []
    })

    useEffect(() => {
        if(props.value){
            const tag = props.value.split(';')
            setTags({
                ...tags,
                tagsArray: tag
            })
            console.log(tag)
        }else{
            console.log(props.value)
        }
    }, [])

    useEffect(() => {
        if(props.onChangeValue){
            const tag = tags.tagsArray.join(';')
            props.onChangeValue(props.inputType, tag)
        }
    }, [tags])

    useEffect(() => {
        const klsPengampu = tags.tagsArray.join(';')
    }, [tags])
    return (
        <View>
            <Label text={"Kelas Pengampu"} />
            <View style={{marginTop: 8}}>
                <TagInput 
                    updateState={(state) => setTags(state)}
                    tags={tags}
                    placeholder={"Kelas Pengampu"}
                    tagStyle={styles.tag}
                    keysForTag={"?"}
                    // containerStyle={styles.container}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -10
    },  
    inputContainer: {
        marginHorizontal: -10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#DBDBDB'
    },
    input: {
        fontFamily: "Lato",
        fontSize: 16,

    }
})

export default TagsField