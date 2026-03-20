
import React, {useState, useEffect} from 'react';
import {View,Text,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
 const [status,setStatus]=useState('');

 useEffect(()=>{
   const interval=setInterval(async ()=>{
     const res=await fetch('http://localhost:3000/api/orders');
     const data=await res.json();
     if(data[0]) setStatus(data[0].status);
   },3000);
   return ()=>clearInterval(interval);
 },[]);

 return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text>Estado de orden: {status}</Text>
   </View>
 );
}
