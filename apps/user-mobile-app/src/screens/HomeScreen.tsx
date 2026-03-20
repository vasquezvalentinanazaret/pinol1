import React,{useEffect,useState} from "react";
import { View,Text,FlatList,Button } from "react-native";
import { API } from "../services/api";

export default function Home({navigation}){
  const [data,setData]=useState([]);

  useEffect(()=>{
    API.get("/restaurants").then(r=>setData(r.data));
  },[]);

  return (
    <FlatList
      data={data}
      keyExtractor={(i)=>i.id}
      renderItem={({item})=>(
        <View style={{padding:10}}>
          <Text>{item.name}</Text>
          <Button title="Pedir" onPress={()=>navigation.navigate("Cart")}/>
        </View>
      )}
    />
  );
}
