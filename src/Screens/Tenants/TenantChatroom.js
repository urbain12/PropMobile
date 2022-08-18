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
  TextInput
}
  from "react-native";
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Entypo';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'






const TenantChatroom = (props) => {
  const [responses, setResponses] = useState([])

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
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#f4a261" }}>Chat<Text style={{ fontWeight: "bold", fontSize: 20, color: "#000" }}>room</Text></Text>
          </TouchableOpacity>

          <View style={{ width: "30%", alignItems: "center" }}>
            {/* <FontAwesome name="exchange" size={24} color="#05375a" /> */}
          </View>

        </View>
      </View>

      <ScrollView style={{ backgroundColor: "#f4f6fc", }}>



        <View>
          <View style={styles.container}>
            <Text style={{ color: "black", marginRight: 15, marginBottom: 5 }}>Me</Text>
            <View style={styles.gradient}>
              <Text style={styles.text}>Hi, How are you? </Text>
            </View>
          </View>

          <View style={styles.container2}>
            <View>
              <Text style={{ color: "black", marginLeft: 10, marginBottom: 5, fontSize: 10 }}>Zproperty</Text>
              <View style={styles.gradient2} >
                <Text style={styles.text}>Hi, How can i help you?</Text>
              </View>
            </View>
          </View>
        </View>



      </ScrollView>
    </View>
  );
}

export default TenantChatroom;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: 'flex-end'
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
  duration: {
    color: '#b6b6b6',
    fontSize: 11,
    marginTop: 5,
    marginHorizontal: 10,
    alignSelf: 'flex-end'
  },
  gradient: {
    maxWidth: 220,
    backgroundColor: '#05375a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    height: 50
  },
  gradient2: {
    maxWidth: 220,
    backgroundColor: '#009cde',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    height: 50,
  },
  text: {
    color: '#fff',
  },
  duration2: {
    color: '#b6b6b6',
    fontSize: 11,
    marginHorizontal: 10,
    marginTop: 5,
  },
  container2: {
    flexDirection: 'row',
    marginTop: 5,
    width: 250
  },
  message2: {
    fontSize: 13,
    marginHorizontal: 15,
  },
  Formcontainer: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
    paddingBottom: 2,
    marginHorizontal: 20,
  width:280,
},
icon: {
    marginTop: 20,
    marginBottom: 20,
    color: '#05375a',

},
})



