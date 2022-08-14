import React,{useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ScrollView
 } from "react-native";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { MaterialCommunityIcons,  FontAwesome5 ,FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
 const windowHeight = Dimensions.get('window').height;
 const windowWidth = Dimensions.get('window').width;
const Manager = ({ navigation }) => {
    useEffect(async()=>{
        const email = await AsyncStorage.getItem('token')
        console.log(email)
    },[])
    return (
        <>
        <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content"/>
            <View style={{
                    height:90,
                    paddingTop:20,
                    backgroundColor:'#e9ecef',
                    justifyContent:"center",
                    ...styles.shadow
            }}>
                <View style={{flexDirection:"row"}}>
                    <View style={[styles.shadow,{width:"25%",alignItems:"center"}]}>
                    <Image style={{height:30,width:30}} source={require('../../Images/logo.png')} />
                    </View>

                    <View style={{width:"50%",alignItems:"flex-start"}}>
                        <Text style={{fontWeight:"bold",fontSize:20}}>Z ProperTech LTD</Text>
                    </View>

                    <View style={{width:"25%",alignItems:"center"}}>
                    <MaterialCommunityIcons name="bell" size={24} color="#05375a" />
                    </View>

                </View>
            </View>


        <ScrollView>

        <View style = {styles.container}>
            

            <Text style={{marginTop:30,fontSize:24,marginLeft:'10%'}}>Here's how you're doing</Text>
            <View style={{borderBottomColor:'gray',borderBottomWidth:1,width:"80%",alignSelf:"center",marginTop:20}}>
                <Text style={{marginBottom:20,fontWeight:"bold"}}>My Properties</Text>
            </View>

            <View style={{marginTop:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                
                <View style={{zIndex:1,marginRight:'-5%',height:90,width:windowWidth/4.4,backgroundColor:"#3f4d64",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                    <Text style={{color:"white",fontSize:40,marginBottom:"22%"}}>3</Text>
                    <Text style={{color:"black",fontSize:15,marginBottom:'-52%'}}>Occupied</Text>
                </View>
                
                <View style={{height:90,width:windowWidth/4.4,backgroundColor:"#adb5bd",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                    <Text style={{color:"#3f4d64",fontSize:40,marginBottom:"22%"}}>1</Text>
                    <Text style={{color:"gray",fontSize:15,marginBottom:'-52%'}}>Available</Text>
                </View>
                <View style={{ marginLeft:"12%",height:90,width:windowWidth/4.4,backgroundColor:"#f4a261",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                    <Text style={{color:"white",fontSize:40,marginBottom:"22%"}}>2</Text>
                    <Text style={{color:"gray",fontSize:15,marginBottom:'-52%'}}>Booked</Text>
                </View>
            </View>

            <View style={{width:"80%",alignSelf:"center",marginTop:'10%'}}>
                <Text style={{marginBottom:20,fontWeight:"bold",fontSize:18}}>Earnings</Text>
            </View>

            <View style={{height:"85%",width:"100%",backgroundColor:"#3f4d64",borderTopLeftRadius:20,borderTopRightRadius:20,marginBottom:20,paddingBottom:20}}>
                <View style={{flexDirection:"row",marginLeft:'8%'}}>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Personal Balance</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 500,000</Text>
                    </View>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Earnings in February</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 800,000</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginLeft:'8%'}}>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Avg Rental Price</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 500,000</Text>
                    </View>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Active Bookings</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 1,600,000</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginLeft:'8%'}}>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Upcoming Bookings</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 800,000</Text>
                    </View>
                    <View style={{width:"50%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                        <Text style={{color:"white",fontSize:16}}>Cancelled Bookings</Text>
                        <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf 500,000</Text>
                    </View>
                </View>
            </View>

            

        </View>
        </ScrollView>



        <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row",alignItems:"center",borderTopRightRadius:20,borderTopLeftRadius:20}}>



            <TouchableOpacity style={{ marginLeft: "0%",  width: "25%" ,justifyContent:"center",alignItems:"center"}}
            >

                <Entypo name="home" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }}
            onPress={() => navigation.navigate("Chat")}
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




            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }} 
            onPress={() => navigation.navigate("ManagerProfile")} >

            <FontAwesome name="user-circle" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
            </TouchableOpacity>


        </View>
</>
    );
};


export default Manager;

const styles = StyleSheet.create({

container:{
    flex:1 ,
    zIndex:1,
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

})
