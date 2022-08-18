import React, { useEffect, useState } from "react";
import {
    Text,
    StatusBar,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    Button,
    StyleSheet,
    LogBox,
    TextInput,
    ActivityIndicator
}
    from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Entypo, FontAwesome5,EvilIcons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Entypo';
import { TextInputMask } from "react-native-masked-text";
import { Picker } from '@react-native-picker/picker';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'






const PayRent = (props) => {
    const [mydata, setMyData] = useState([])
  const [myroom, setMyRoom] = useState([])
  const [image, setImage] = useState('')
    const [year, setYear] = useState(JSON.stringify(new Date().getFullYear()))
  const [month, setMonth] = useState(false)
  const [loading, setLoading] = useState(false)
  const [allowDragging, setAllowDragging] = useState(true)
  const [payment_amount, setpaidAmount] = useState("")
  const [transactionID, settransactionID] = useState("")
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [room, setRooms] = useState("")
    const handleamount = (val) => {
        setpaidAmount(val)
      }
    
      const handletitle = (val) => {
        setTitle(val)
      }
    
      const handledetails = (val) => {
        setDetails(val)
      }
    
      const handlerooms = (val) => {
        setRooms(val)
      }
    
      const handletransactionid = (val) => {
        settransactionID(val)
      }
      const handleYear = (val) => {
        setYear(val)
      }
    
      const handleMonth = (val) => {
        setMonth(val)
      }
    
      const takePaymentPicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
          quality: 0.2,
          allowsEditing: true,
        });
        setImage(uri)
      }
      const _pickPaymentDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setImage(result.uri)
      }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#4263ec' barStyle="dark-content" />
            <View style={{
                height: 90,
                paddingTop: 20,
                backgroundColor: '#e9ecef',
                justifyContent: "center",
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => props.navigation.goBack()}>
                        <SimpleLineIcons name="arrow-left" size={25} color="#f4a261" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#f4a261" }}>Pay<Text style={{ fontWeight: "bold", fontSize: 20, color: "#000" }}>Rent</Text></Text>
                    </TouchableOpacity>

                    <View style={{ width: "30%", alignItems: "center" }}>
                        {/* <FontAwesome name="exchange" size={24} color="#05375a" /> */}
                    </View>

                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: '75%', width: '90%', backgroundColor: '#fff', borderRadius: 40, padding: 20 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1}>
                  <Text style={{ fontSize: 20, color: '#000', marginTop: 10 }}>Transaction ID  <Text style={{ color: 'red' }}>*</Text></Text>
                  <TextInput style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, height: 35, width: '90%', marginTop: 20, textAlign: 'center' }} name="transactionID" value={transactionID} onChangeText={(val) => { handletransactionid(val) }} />
                  <Text style={{ fontSize: 20, color: '#000', marginTop: 10 }}>Payment Amount  <Text style={{ color: 'red' }}>*</Text></Text>
                  <TextInput keyboardType={'numeric'} style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, height: 35, width: '90%', marginTop: 20, textAlign: 'center' }} name="payment_amount" value={payment_amount} onChangeText={(val) => { handleamount(val) }} />
                  <Text style={{ fontSize: 20, color: '#000', marginTop: 10 }}>Rooms <Text style={{ color: 'red' }}>*</Text></Text>
                  <View
                    style={{
                      width: '100%',
                      marginTop: -5,
                      borderColor: 'black',
                      borderBottomWidth: 1,
                      borderRadius: 10,
                    }}>

                    <Picker
                      selectedValue={room}
                      onValueChange={(val) => { handlerooms(val) }}
                    >
                      <Picker.Item label="Select Room" value="" />
                      {JSON.stringify(myroom) !== 'null' && JSON.stringify(myroom) !=='[]' ? (
                        myroom.map(room => <Picker.Item label={room.roomCode} value={room.roomID} />)
                      ) : (
                          <Picker.Item label="Loading..." value="" />
                        )}
                    </Picker>
                  </View>
                  <Text style={{ fontSize: 20, color: '#000', marginTop: 20 }}>Paid Month/Year <Text style={{ color: 'red' }}>*</Text></Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        width: '50%',
                        marginTop: -5,
                        borderColor: 'black',
                        borderBottomWidth: 1,
                        borderRadius: 10,
                      }}>

                      <Picker
                        selectedValue={year}
                        onValueChange={(val) => { handleYear(val) }}
                      >
                        <Picker.Item label={JSON.stringify(new Date().getFullYear())} value={JSON.stringify(new Date().getFullYear())} />
                        <Picker.Item label={JSON.stringify(new Date().getFullYear() - 1)} value={JSON.stringify(new Date().getFullYear() - 1)} />
                        <Picker.Item label={JSON.stringify(new Date().getFullYear() - 2)} value={JSON.stringify(new Date().getFullYear() - 2)} />
                        <Picker.Item label={JSON.stringify(new Date().getFullYear() - 3)} value={JSON.stringify(new Date().getFullYear() - 3)} />

                      </Picker>
                    </View>

                    <View
                      style={{
                        width: '50%',
                        marginTop: -5,
                        borderColor: 'black',
                        borderBottomWidth: 1,
                        borderRadius: 10,
                      }}>

                      <Picker
                        selectedValue={month}
                        onValueChange={(val) => { handleMonth(val) }}
                      >
                        <Picker.Item label="Select Month" value="" />
                        <Picker.Item value="January" label="January" />
                        <Picker.Item value="February" label="February" />
                        <Picker.Item value="March" label="March" />
                        <Picker.Item value="April" label="April" />
                        <Picker.Item value="May" label="May" />
                        <Picker.Item value="June" label="June" />
                        <Picker.Item value="July" label="July" />
                        <Picker.Item value="August" label="August" />
                        <Picker.Item value="September" label="September" />
                        <Picker.Item value="October" label="October" />
                        <Picker.Item value="November" label="November" />
                        <Picker.Item value="December" label="December" />

                      </Picker>
                    </View>

                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }} onPress={takePaymentPicture}>
                  <View>
                    <EvilIcons name="camera" size={50} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontSize: 20, color: '#000', marginTop: 10, color: "#4285F4" }}>Fotora borodero</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center' }}>or</Text>
                <Button
                  title="Select Document"
                  onPress={_pickPaymentDocument}
                />
                <TouchableOpacity activeOpacity={1}>
                  <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                    <ImageBackground
                      source={{
                        uri: image,
                      }}
                      style={{ height: 150, width: 150, borderColor: 'black', borderWidth: 0.3 }}
                      imageStyle={{ borderRadius: 15 }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>

                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </ScrollView>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={(event) => {
                //   handleSubmit(event)
                }}>
                  <View style={{ height: 50, width: 100, borderRadius: 15, backgroundColor: '#f4a261', marginRight: 10, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    {loading ? (
                      <ActivityIndicator size='large' color='white' />
                    ) : (
                        <Text style={{ color: 'white', fontSize: 20 }}>submit</Text>
                      )}
                  </View>
                </TouchableOpacity>


              </View>
            </View>
        </View>
        </View>
    );
}

export default PayRent;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 19
    },
    shadow: {
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Formcontainer: {
        flexDirection: 'row',
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#05375a',
        paddingBottom: 2,
        marginHorizontal: 20,
        width: 280,
    },
    icon: {
        marginTop: 20,
        marginBottom: 20,
        color: '#05375a',

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        marginLeft: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    Title: {
         
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {
         
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 20,
        color: "grey",
        marginTop: 1,

    },
})



