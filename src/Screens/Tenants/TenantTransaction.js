import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ScrollView,
    TextInput,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const TenantTransaction = ({ navigation }) => {

    const [TenantTransaction, setTenantTransaction] = useState([])
    const getDashboardInfo = async () => {


        const options = {
            headers: {
                "Content-Type": "application/json",
                "x-auth": "705d3a96-c5d7-11ea-87d0-0242ac130003",
                "app-type": "none",
                "app-version": "v1",
                "app-device": "Postman",
                "app-device-os": "Postman",
                "app-device-id": "0",
                "format": "json"
            }
        };
        const tenant_info = await AsyncStorage.getItem('tenant_info')
        const tenant_object = JSON.parse(tenant_info)
        const tenant_id = tenant_object.tenantID
        console.log(tenant_id)

        await axios.get(`http://war.t3ch.rw:8231/prop_man/api/web/index.php?r=v1/app/get-transaction-by-tenant&tenantId=${tenant_id}`, options)
            .then(res => {
                if (res.status === 200) {
                    //   alert(JSON.stringify(res.data.data))
                    setTenantTransaction(res.data.data)

                }
            })
    }
    useEffect(() => {
        getDashboardInfo()
    }, [])

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: 90,
                paddingTop: 20,
                backgroundColor: '#e9ecef',
                justifyContent: "center",
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "70%", alignItems: "flex-start", marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>My Transaction History</Text>
                    </View>

                    <View style={{ width: "30%", alignItems: "center" }}>
                        {/* <FontAwesome name="exchange" size={24} color="#05375a" /> */}
                    </View>

                </View>
            </View>

            {/* <View style={{
                height: 35,
                justifyContent: "center",
                marginTop: 5
            }}>
                <TouchableOpacity style={{ flexDirection: "row", marginRight: 20, marginTop: 10, marginHorizontal: 20 }}>

                    <View style={{ width: "50%" }}>
                        <TextInputMask
                            placeholderTextColor="#666666"
                            placeholder="DD-MM-YYYY"
                            type={'datetime'}
                            options={{
                                format: 'DD-MM-YYYY',
                            }}
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => setemail(val)}
                        />
                    </View>
                    <View style={{ width: "50%" }}>
                        <TextInputMask
                            placeholderTextColor="#666666"
                            placeholder="DD-MM-YYYY"
                            type={'datetime'}
                            options={{
                                format: 'DD-MM-YYYY',
                            }}
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => setemail(val)}
                        />
                    </View>

                </TouchableOpacity>
            </View> */}



            <ScrollView>

                {JSON.stringify(TenantTransaction) !== 'null' && JSON.stringify(TenantTransaction) !== '[]' ? (
                    TenantTransaction.map(Trans => {
                        return (

                            <View style={styles.container} >
                                <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "white", width: "100%", marginHorizontal: 1, marginTop: 5 }}>

                                    <View style={{ width: "55%", }}>
                                        <Text style={styles.Title}>{Trans.paymentDate}</Text>
                                        <Text style={[styles.Texties, { marginBottom: 10, marginTop: 1 }]}>{Trans.roomName}</Text>
                                    </View>

                                    <View style={{ width: "45%" }}>
                                        <Text style={styles.Title}>Rwf {Trans.paidAmount} </Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>No Transaction yet...</Text>
                    </View>
                )}




            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



            <TouchableOpacity style={{ marginLeft: "0%", width: "25%", justifyContent: "center", alignItems: "center" }}
                onPress={() => navigation.navigate("TenantProperties")}
            >

                    <Entypo name="home" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantChat")}
                >

                    <Ionicons name="chatbox-ellipses" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Inbox</Text>
                </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantTransaction")}
                >

                <FontAwesome name="exchange" size={24} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Transactions</Text>
                </TouchableOpacity>




            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }} onPress={() => navigation.navigate("TenantProfile")} >

                    <FontAwesome name="user-circle" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
                </TouchableOpacity>


            </View>
        </>
    );
};


export default TenantTransaction;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#a98467",
        width: "92%",
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,

    },
    Title: {

        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "white"
    },
    Texties: {

        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 15,
        color: "#c1c3d7",
        marginTop: 10,

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
    Tab: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginLeft: 12,
        height: 50,
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        shadowColor: "#707070",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 4.65,

        // elevation: 8,
    },
    textInput: {

        borderRadius: 10,
        alignSelf: 'center',
        height: 55,
        width: "90%",
        marginTop: 10,
        textAlign: "left",
        padding: 10,
        flex: 1,
        borderBottomWidth: 1
    }

})
