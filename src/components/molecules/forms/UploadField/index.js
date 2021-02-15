import React, {useEffect, useRef, useState} from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import Label from '../../../atoms/texts/Label'
import Icon from 'react-native-vector-icons/FontAwesome'
import CircleImage from '../../../atoms/images/CircleImage'
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Heading2 from '../../../atoms/texts/Heading2'
import RandomString from '../../../../utils/RandomString'


const UploadField = (props) => {
    const [image, setImage] = useState({})
    
    useEffect(() => {
        if(props.onChangeValue)
          props.onChangeValue(image)
    }, [image])

    const pickSingleWithCamera = (mediaType = 'photo') => {
        refRBSheet.current.close()
        ImagePicker.openCamera({
        includeExif: true,
        mediaType,
        })
        .then((img) => {
            console.log('received image', img);
            cleanupSingleImage()
            cropLast(img.path)
        })
        .catch((e) => {
          console.log(e)
        });
    }

    const pickSingleGallery = (mediaType = 'photo') => {
      refRBSheet.current.close()
      ImagePicker.openPicker({
        includeExif: true,
        mediaType,
      })
        .then((img) => {
          cleanupSingleImage()
          cropLast(img.path)
        })
        .catch((e) => {
          console.log(e);
          // Alert.alert(e.message ? e.message : e);
        });
    }

    const cropLast = (imgUri) => {
    
        ImagePicker.openCropper({
          path: imgUri,
          width: 512,
          height: 512,
        })
          .then((img) => {
            // console.log('received cropped image', img);
            setImage({
                uri: img.path,
                name: `${RandomString(8)}.${img.mime.replace('image/', '')}`,
                type: img.mime,
            });
          })
          .catch((e) => {
            console.log(e);
            // Alert.alert(e.message ? e.message : e);
          });
      }

    const cleanupSingleImage = () => {
        let img = image;
        if(img.uri != null){
          ImagePicker.cleanSingle(img ? img.uri : null)
            .then(() => {
              // console.log(`removed tmp image ${img.uri} from tmp directory`);
            })
            .catch((e) => {
              console.log(e);
            });
        }
      }

      const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
          }}
        >
          <Text>Swipe down to close</Text>
        </View>
      );  
      
      const refRBSheet = useRef();

    return (
        <View style={{flex: 1}}>
            <Label text={props.label? props.label : ""} />
            <View style={{marginVertical: 8, flexDirection: 'column', alignItems: 'center'}}>
                <CircleImage source={props.source} />
            </View>
            
                {/* <TouchableOpacity activeOpacity={0.8} onPress={() => props.isOpenCamera? pickSingleWithCamera() : pickSingleGallery()}> */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => refRBSheet.current.open()}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#F5F5F5", alignItems: 'center', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                            <Icon name="upload" size={16} color="#BABABA" />
                            <Text style={{fontFamily: "Lato", color: '#bababa', fontSize: 16, marginRight: 24, marginLeft: 8}}>Pilih File...</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderTopRightRadius: 4, borderBottomRightRadius: 4, borderColor: '#DBDBDB', borderWidth: 1, height: 43, marginTop: 8, paddingHorizontal: 10}}>
                            <TextInput style={{fontFamily: "Lato", color: '#4a4a4a', fontSize: 16}} editable={false}>{props.fileName? props.fileName: 'gambar1.jpg'}</TextInput>
                        </View>
                    </View>
                </TouchableOpacity>
                <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  closeOnPressMask={true}
                  height={180}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent"
                    },
                    draggableIcon: {
                      backgroundColor: "#4a4a4a"
                    },
                    container: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      shadowColor: "#000",
                      shadowOffset:{
                      width: 0,
                      height: 3,
                      },
                      shadowOpacity: 0.29,
                      shadowRadius: 4.65,
                      elevation: 7,
                    }
                  }}
                >
                  <View style={{paddingLeft: 24}}>
                    <Text style={{fontFamily: "Lato", fontSize: 13, color: '#4a4a4a'}}>Pilih Metode</Text>
                    <View style={{marginTop: 32}}>
                      <TouchableOpacity activeOpacity={0.8} onPress={() => pickSingleWithCamera()}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{justifyContent: 'center'}}>
                            <Icon name="camera" size={20} color="#4a4a4a" />
                          </View>
                          <View style={{marginLeft: 32, justifyContent: 'center'}}>
                            <Text style={{fontFamily: "Lato", fontSize: 20, color: '#4a4a4a'}}>Take photo</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.8} onPress={() => pickSingleGallery()}>
                        <View style={{marginTop: 24,flexDirection: 'row'}}>
                          <View style={{justifyContent: 'center'}}>
                            <Icon name="image" size={20} color="#4a4a4a" />
                          </View>
                          <View style={{marginLeft: 32, justifyContent: 'center'}}>
                            <Text style={{fontFamily: "Lato", fontSize: 20, color: '#4a4a4a'}}>Choose image</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </RBSheet>
        </View>
    )
}

export default UploadField
