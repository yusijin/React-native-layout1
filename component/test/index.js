import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const Test = () => {
    return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',
        flex:1,
        height:80,
        borderWidth:2,
        justifyContent:'space-between'
    }}>

        
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{
                color:'red',
                marginRight:'3%',
                fontSize:30,
                
                                
                }}>
              20%
      </Text>
      <Text style={{
          justifyContent:'',
         textAlignVertical:'bottom',
          fontSize:20,
          
      }}>
          8,000원
      </Text>
    
      <Text style={{
    
           marginLeft:'3%',
           textDecorationLine:'line-through',
           textAlignVertical:'bottom',
           fontSize:10,
           color:'#707070'
      }}>
          10,000원
      </Text>
      </View>
      <View style={{justifyContent:'center'}}>
          <Text style={{textAlignVertical:'center'}}>
              >
          </Text>
      </View>
      </View>
    </View>
    )

}
const styles= StyleSheet.create({
    container: {
       
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
      
        
},
  
        
})

export default Test;