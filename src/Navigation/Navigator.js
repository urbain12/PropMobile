import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ActivityIndicator,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../Screens/Login';
import { AuthContext } from '../context/Context';
import axios from 'axios';
//MANAGER SCREEN
import Manager from '../Screens/Managers/Manager';
import MyProperties from '../Screens/Managers/MyProperties';
import AllTransactions from '../Screens/Managers/AllTransactions';
import Chat from '../Screens/Managers/Chat';
import ManagerProfile from '../Screens/Managers/ManagerProfile';
//TENANT SCREEN
import TenantTransaction from '../Screens/Tenants/TenantTransaction';
import Tenant from '../Screens/Tenants/Tenant';
import TenantProperties from '../Screens/Tenants/TenantProperties';
import TenantChat from '../Screens/Tenants/TenantChat';
import TenantProfile from '../Screens/Tenants/TenantProfile';
import TenantChatroom from '../Screens/Tenants/TenantChatroom';
import PayRent from '../Screens/Tenants/PayRent';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = (props) => {
    const initialState = {
        isLoading:true,
        operator_id:null,
        userName:'',
        userToken:null,
        redirect_page:'',
        email:'',
        properties:[],
        tenant_info:{}
    }

    const loginReducer = (prevState,action)=>{
        switch(action.type){
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken:action.token,
                    userName:action.name,
                    email:action.email,
                    redirect_page:action.redirect_page,
                    properties:action.properties,
                    tenant_info:action.tenant_info,
                    operator_id:action.operator_id,
                    isLoading:false
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken:action.token,
                    userName:action.name,
                    email:action.email,
                    redirect_page:action.redirect_page,
                    properties:action.properties,
                    tenant_info:action.tenant_info,
                    operator_id:action.operator_id,
                    isLoading:false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken:null,
                    userName:null,
                    email:null,
                    redirect_page:null,
                    properties:null,
                    tenant_info:null,
                    operator_id:null,
                    isLoading:false
                };
        }
    }

    const [loginState,dispatch] = React.useReducer(loginReducer,initialState)

    const authContext = useMemo(()=>({
        signIn: async(userName,password)=>{
            // setUserToken('kdjf');
            // setIsLoading(false)
            
            const postObj={
                username:userName,
                password:password
            }

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


            await axios.post("http://war.t3ch.rw:8231/prop_man/api/web/index.php?r=v1/app/login", postObj,options)
            .then(res => {
              if (res.status === 200) {
                  console.log(res.data)
                  const my_properties=JSON.stringify(res.data.data.properties)
                  const my_tenant_info=JSON.stringify(res.data.data.tenant)
                const items = [['userToken', 'mytoken'], 
                ['userName', res.data.data.names],
                ['email', res.data.data.email_id],
                ['redirect_page', res.data.data.redirect_page],
                ['operator_id', JSON.stringify(res.data.data.operator_id)],
                ['properties', my_properties],
                ['tenant_info', my_tenant_info]
             ]
                AsyncStorage.multiSet(items, () => {
                    console.log('asyncstorage set successfully')
                });
                dispatch({ type:'LOGIN', 
                name: res.data.data.names, 
                token: 'mytoken',  
                email: res.data.data.email_id,
                redirect_page: res.data.data.redirect_page,
                properties: res.data.data.properties,
                tenant_info:res.data.data.tenant,
                operator_id:res.data.data.operator_id
                })
                console.log(res.data.data.names,res.data.data.email_id,res.data.data.redirect_page)
                
              }
            }).catch((error)=>{
              if(error.response){
                console.log(error.response.data);
                alert('Invalid email or password!')
              }
            })

          
        },
        signOut:async()=>{

            try {
                await AsyncStorage.multiRemove(["userToken", "userName", "email", "redirect_page","properties","tenant_info","operator_id"]);
            } catch (error) {
                console.log(error)
            }
            dispatch({ type:'LOGOUT' })
        }
    }),[])

    useEffect(()=>{
        setTimeout(async()=>{
            // setIsLoading(false);
            let userToken;
            let userName;
            let email;
            let redirect_page;
            let properties;
            let tenant_info;
            let operator_id;
            userToken=null;
            userName=null;
            email=null;
            redirect_page=null;
            properties=null;
            tenant_info=null;
            operator_id=null;

            try {
            //  await   AsyncStorage.multiRemove(["userToken", "userName", "email", "redirect_page","properties","tenant_info"]);
            const data = await AsyncStorage.multiGet(["userToken", "userName", "email", "redirect_page", "properties","tenant_info","operator_id"]);
            const new_data = data.map(entry => entry[1]);
            userToken=new_data[0]
            userName=new_data[1]
            email=new_data[2]
            redirect_page=new_data[3]
            properties=JSON.parse(new_data[4])
            tenant_info=JSON.parse(new_data[5])
            operator_id=new_data[7]
            dispatch({ type:'RETRIEVE_TOKEN',
            token: userToken,
            name: userName,
            email: email,
            redirect_page: redirect_page,
            properties: properties,
            tenant_info: tenant_info,
            operator_id: operator_id
        })
            } catch (error) {
                console.log(error)
            }
            
        },2000)
    },[])

    if(loginState.isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size='large' color='#000'/>
            </View>
        )
    }
  
  
  
    else{
      if(loginState.userToken !== null){
        if(loginState.redirect_page==='tenant'){
            return (
                <AuthContext.Provider value={authContext}>
                 <Stack.Navigator screenOptions={screenOptionStyle} >
                     
                     {/* Tenant */}
                     <Stack.Screen name="TenantProperties" component={TenantProperties} />
                     <Stack.Screen name="Tenant" component={Tenant} />
                     <Stack.Screen name="TenantTransaction" component={TenantTransaction} />
                     <Stack.Screen name="TenantChat" component={TenantChat} />
                     <Stack.Screen name="TenantProfile" component={TenantProfile} />
                     <Stack.Screen name="TenantChatroom" component={TenantChatroom} />
                     <Stack.Screen name="PayRent" component={PayRent} />
                 </Stack.Navigator>
                 </AuthContext.Provider>
         
             );
        }
        else{
            return (
                <AuthContext.Provider value={authContext}>
                 <Stack.Navigator screenOptions={screenOptionStyle} >
                     
                     <Stack.Screen name="Manager" component={Manager} />
         
                     {/* MANAGER */}
         
                     <Stack.Screen name="MyProperties" component={MyProperties} />
                     <Stack.Screen name="Chat" component={Chat} />
                     <Stack.Screen name="ManagerProfile" component={ManagerProfile} />
                     <Stack.Screen name="AllTransactions" component={AllTransactions} />
         
                     
                 </Stack.Navigator>
                 </AuthContext.Provider>
         
             );
        }
    
      }
      else{
          return(
            <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={screenOptionStyle} >
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
            </AuthContext.Provider>
          )
      }
    }
}

export default HomeStackNavigator;
