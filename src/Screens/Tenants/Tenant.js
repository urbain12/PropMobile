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
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const ManagerProfile = ({ navigation }) => {

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: 120,
                paddingTop: 20,
                backgroundColor: '#e9ecef',
                justifyContent: "center",
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "20%", alignItems: "center", marginTop: 10 }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 20, borderColor: "#05375a", borderWidth: 1.5 }} source={require('../../Images/male.jpg')} />
                    </View>

                    <View style={{ width: "60%", alignItems: "flex-start", marginTop: 10, }}>
                        <Text style={styles.Title}>Aimable RUKUNDO</Text>
                    </View>

                    <View style={{ width: "20%", alignItems: "center", marginTop: 15 }}>
                        <MaterialCommunityIcons name="bell" size={24} color="#05375a" />
                    </View>

                </View>
            </View>

<View style={{marginBottom:25}}>

                <Text style={[styles.Title,{fontSize:20,marginTop:20,marginBottom:30}]}>Happy To have You here</Text>
                <View style={[styles.Tab]}>

                    <TouchableOpacity style={{ zIndex: 2, width: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "#05375a", height: 40, borderRadius: 10, marginRight: -15 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Commercial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 1, width: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "#ADB5BD", height: 40, borderTopRightRadius: 10, borderBottomRightRadius: 10, marginLeft: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Apartment</Text>
                    </TouchableOpacity>

                </View>
</View>


            <ScrollView style={{height:"100%"}}>

                <Text style={styles.Title}>Zoom House</Text>
                <Text style={[styles.Texties, { color: "#05375a" }]}>3 Rooms,Fully Furnished</Text>
                <Text style={styles.Texties}>Kacyiru-Kigali</Text>
                <View style={styles.container} >

                    <ImageBackground style={{ height: "85%", width: "100%", flexDirection: "row" }} imageStyle={{ borderRadius: 10 }} source={require('../../Images/hotel.jpg')} >
                    </ImageBackground>
                    <TouchableOpacity style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
                        <Text style={[styles.hoteltitle, { width: "40%", marginLeft: 20, fontSize: 20, color: "#05375a" }]}>Book Now</Text>
                        <Text style={[styles.hoteltitle, { width: "60%", marginLeft: 40 }]}>Rwf {JSON.stringify(format(12000000)).substring(1, JSON.stringify(format(12000000)).length - 4)}</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



<TouchableOpacity style={{ marginLeft: "0%", width: "25%", justifyContent: "center", alignItems: "center" }}
    onPress={() => navigation.navigate("Tenant")}
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
    onPress={() => navigation.navigate("TenantProperties")}
>

    <FontAwesome5 name="laptop-house" size={30} color="#05375a" />


    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Properties</Text>
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
        backgroundColor: "#f4a261",
        height: 200,
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        borderRadius: 20,

    },
    hoteltitle: {
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 10,
        color: "white",
        marginTop: -20
    },
    hoteldesc: {
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 10,
        color: "#ced4da"

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
