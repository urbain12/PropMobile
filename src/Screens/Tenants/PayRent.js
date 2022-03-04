import React, { useEffect, useState } from "react";
import {
    Text,
    StatusBar,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    LogBox,
    TextInput,
    ActivityIndicator
}
    from "react-native";
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Entypo';
import { TextInputMask } from "react-native-masked-text";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'






const PayRent = (props) => {
    const [loading, setloading] = useState('')

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

            <ScrollView style={{ backgroundColor: "#f4f6fc", }}>

                <View style={styles.container}>
                    <Text style={[styles.Title,{marginTop:30}]}>Months</Text>
                    <Text style={styles.Texties}>How many months?</Text>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Type Here"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => setemail(val)}
                        />
                    </View>
                    <Text style={[styles.Title,{marginTop:30}]}>Monthly fee</Text>
                    <Text style={styles.Texties}>How much you paid?</Text>
                    <View style={styles.Formcontainer}>
                        <TextInputMask
                            placeholder="Amount"
                            keyboardType="numeric"
                            type={'money'}
                            options={{
                              precision: 0,
                              separator: ',',
                              delimiter: ',',
                              unit: 'Rwf  ',
                              suffixUnit: ''
                            }}
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.signIn}
                    // onPress={() => navigation.navigate("Tenant")}
                    >
                        <View
                            style={{ backgroundColor: "#38b000", width: "100%", height: "100%", alignItems: "center", borderRadius: 10 }}
                        >
                            {loading ? (
                                <ActivityIndicator size='large' color='white' style={{ marginTop: 10 }} />
                            ) :
                                (
                                    <Text style={{ color: "white", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>Login</Text>
                                )}

                        </View>
                    </TouchableOpacity>

                </View>



            </ScrollView>
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
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 20,
        color: "grey",
        marginTop: 1,

    },
})



