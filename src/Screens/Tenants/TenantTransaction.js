import React from 'react'
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


const TenantTransaction = ({ navigation }) => {

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

            <View style={{
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
            </View>



            <ScrollView>
                <View style={styles.container} >
                    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "white", width: "100%", marginHorizontal: 1, marginTop: 5 }}>

                        <View style={{ width: "55%", }}>
                            <Text style={styles.Title}>Nov 02,2022</Text>
                            <Text style={[styles.Texties,{marginBottom:10,marginTop:1}]}>Room Number</Text>
                        </View>

                        <View style={{ width: "45%" }}>
                            <Text style={styles.Title}>Rwf {JSON.stringify(format(12000000)).substring(1, JSON.stringify(format(12000000)).length - 4)} </Text>
                        </View>

                    </View>
                    




                </View>
            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row",alignItems:"center",borderTopRightRadius:20,borderTopLeftRadius:20}}>



            <TouchableOpacity style={{ marginLeft: "0%",  width: "25%" ,justifyContent:"center",alignItems:"center"}}
            onPress={() => navigation.navigate("Tenant")}
            >

                <Entypo name="home" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }}
            onPress={() => navigation.navigate("TenantChat")}
            >

            <Ionicons name="chatbox-ellipses" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Inbox</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }}
                onPress={() => navigation.navigate("MyProperties")}
            >

            <FontAwesome5 name="laptop-house" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Properties</Text>
            </TouchableOpacity>




            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }} onPress={() => navigation.navigate("ManagerProfile")} >

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
        height: "3000%",
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
