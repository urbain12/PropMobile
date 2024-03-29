import React,{useState,useEffect} from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/Context';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign,MaterialIcons } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const ManagerProfile = ({ navigation }) => {
    const [profile,setProfile]=useState({})
    const getInfo=async()=>{
        const info=await AsyncStorage.getItem('tenant_info')
        console.log('this is the info:'+info)
        setProfile(JSON.parse(info))
    }
    useEffect(()=>{
        getInfo()
    },[])
    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };
    const context = React.useContext(AuthContext)
    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: 100,
                paddingTop: 20,
                backgroundColor: '#dda15e',
                justifyContent: "center",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "20%", alignItems: "center", }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 20, borderColor: "#05375a", borderWidth: 1.5 }} source={require('../../Images/male.jpg')} />
                    </View>

                    <View style={{ width: "60%", alignItems: "flex-start", }}>
                        <Text style={[styles.Title, { color: "white" }]}>{profile.firstName} {profile.lastName}</Text>
                        <Text style={[styles.Texties, { color: "#05375a" }]}>Tenant</Text>
                    </View>

                    <View style={{ width: "20%", alignItems: "center", marginTop: 10 }}>
                        <MaterialCommunityIcons name="bell" size={24} color="#05375a" />
                    </View>

                </View>
            </View>


            <ScrollView>
                <Text style={[styles.Title, { color: "#05375a",marginTop:20,marginLeft:25,fontSize:18,marginBottom:-10 }]}>My Overview</Text>
                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <MaterialCommunityIcons name="cash" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Payment</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <MaterialCommunityIcons name="bell-alert" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Notifications</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <MaterialCommunityIcons name="onepassword" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Change Password</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container,{marginBottom:50}]} 
                onPress={() => navigation.navigate("Login")}
                >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="logout" size={30} color="red" />
                        </View>

                        <TouchableOpacity onPress={() => context.signOut()} style={{ width: "85%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Logout</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>

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




                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantProfile")} >

                    <FontAwesome name="user-circle" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
                </TouchableOpacity>


            </View>
        </>
    );
};


export default ManagerProfile;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        height: 70,
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        borderRadius: 20,

    },
    Title: {
         
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {
         
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 15,
        color: "#f4a261",
        marginTop: 1,

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
