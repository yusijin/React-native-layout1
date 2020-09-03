import React, { Component ,useState} from 'react'; 
import { View,Button,Text, TouchableOpacity, SafeAreaView } from 'react-native';


const Counter = () => {
    const [count,setCount] = useState<number>(0);
    return (
        <SafeAreaView>
        <TouchableOpacity  onPress={()=>setCount(count + 1)}>
            <Text> + </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setCount(count - 1)}>
            <Text> - </Text>
        </TouchableOpacity>          
        
            
        
        </SafeAreaView>
    )
}
export default Counter;

