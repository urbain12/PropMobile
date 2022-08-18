import React,{useState,useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    Dimensions,
    ScrollView
 } from "react-native";
 import axios from 'axios'
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { MaterialCommunityIcons,  FontAwesome5 ,FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
 const windowHeight = Dimensions.get('window').height;
 const windowWidth = Dimensions.get('window').width;
const Manager = ({ navigation }) => {
    const [dashboardInfo,setDashboardInfo]=useState({})
    const getDashboardInfo=async()=>{
       

        const options = {
            headers: {
           "Content-Type": "application/json",
           "x-auth": "705d3a96-c5d7-11ea-87d0-0242ac130003",
           "app-type":"none",
           "app-version":"v1",
           "app-device":"Postman",
           "app-device-os":"Postman",
           "app-device-id":"0",
           "format":"json"
         }
         };
        const operator_id= await AsyncStorage.getItem('operator_id') 

        await axios.get(`http://war.t3ch.rw:8231/prop_man/api/web/index.php?r=v1/app/get-manager-data&operatorId=${operator_id}`, options)
        .then(res => {
          if (res.status === 200) {
            //   alert(JSON.stringify(res.data.data))
            setDashboardInfo(res.data.data)
            
          }
        })
    }
    useEffect(()=>{
        getDashboardInfo()
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
                        <View style={{padding:3,borderRadius:18,backgroundColor:'#05375a'}}>
                    <Image style={{height:30,width:30}} source={require('../../Images/Propertech_logo.png')} />
                        </View>
                    </View>

                    <View style={{width:"50%",alignItems:"flex-start"}}>
                        <Text style={{fontWeight:"bold",fontSize:20}}>Z ProperTech LTD</Text>
                    </View>

                    <View style={{width:"25%",alignItems:"center"}}>
                    <MaterialCommunityIcons name="bell" size={24} color="#05375a" />
                    </View>

                </View>
            </View>


        {JSON.stringify(dashboardInfo)==="{}"?(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large' color='#000'/>
            </View>
        ):(
            <ScrollView>

            <View style = {styles.container}>
                
    
                <Text style={{marginTop:30,fontSize:24,marginLeft:'10%'}}>Here's how you're doing</Text>
                <View style={{borderBottomColor:'gray',borderBottomWidth:1,width:"80%",alignSelf:"center",marginTop:20}}>
                    <Text style={{marginBottom:20,fontWeight:"bold"}}>My Properties</Text>
                </View>
    
                <View style={{marginTop:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:5}}>
                    
                    <TouchableOpacity style={{height:90,width:windowWidth/4.4,backgroundColor:"#3f4d64",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                        <Text style={{color:"white",fontSize:40,marginBottom:"22%"}}>{dashboardInfo.total_commercial}</Text>
                        <Text style={{color:"gray",fontSize:13,marginBottom:'-52%'}}>Commercials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:90,width:windowWidth/4.4,backgroundColor:"#2a9d8f",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                        <Text style={{color:"white",fontSize:40,marginBottom:"22%"}}>{dashboardInfo.total_residential}</Text>
                        <Text style={{color:"gray",fontSize:13,marginBottom:'-52%'}}>Residential</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:90,width:windowWidth/4.4,backgroundColor:"#adb5bd",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                        <Text style={{color:"#3f4d64",fontSize:40,marginBottom:"22%"}}>{dashboardInfo.total_apartment}</Text>
                        <Text style={{color:"gray",fontSize:13,marginBottom:'-52%'}}>Apartments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height:90,width:windowWidth/4.4,backgroundColor:"#f4a261",alignItems:"center",justifyContent:"center",borderRadius:windowWidth/3}}>
                        <Text style={{color:"white",fontSize:40,marginBottom:"22%"}}>{dashboardInfo.total_estate}</Text>
                        <Text style={{color:"gray",fontSize:13,marginBottom:'-52%'}}>Estate</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'10%',width:'50%',justifyContent:'center',alignItems:'flex-start',paddingLeft:20}}>
                        <Text style={{marginBottom:20,fontWeight:"bold",fontSize:18}}>Monthly earnings</Text>
                    </View>
                    <View style={{marginTop:'10%',width:'50%',alignItems:'flex-end',paddingRight:20}}>
                        <Text style={{marginBottom:20,fontWeight:"bold",fontSize:18}}>Paid this month</Text>
                    </View>
                </View>
                
    
                <View style={{height:"85%",width:"100%",backgroundColor:"#3f4d64",borderTopLeftRadius:20,borderTopRightRadius:20,marginBottom:20,paddingBottom:20}}>
                    <View style={{flexDirection:"row",marginLeft:'8%'}}>
    
                        <View style={{width:'50%'}}>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Commercials</Text>
                                <Text style={{color:"#00f5d4",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.monthly_commercial}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Residential</Text>
                                <Text style={{color:"#00f5d4",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.monthly_residential}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Apartments</Text>
                                <Text style={{color:"#00f5d4",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.monthly_apartment}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Estate</Text>
                                <Text style={{color:"#00f5d4",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.monthly_estate}</Text>
                            </View>
                        </View>
    
                        <View style={{width:'50%'}}>
                        <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Commercials</Text>
                                <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.this_month_commercial}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Residential</Text>
                                <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.this_month_residential}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Apartments</Text>
                                <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.this_month_apartment}</Text>
                            </View>
                            <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"flex-start",marginTop:15}}>
                                <Text style={{color:"white",fontSize:16}}>Estate</Text>
                                <Text style={{color:"#f4a261",fontSize:17,marginTop:10,fontWeight:"bold"}}>Rwf {dashboardInfo.this_month_estate}</Text>
                            </View>
                        </View>
    
    
    
                    </View>
                </View>
            </View>
            </ScrollView>
        )}



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
