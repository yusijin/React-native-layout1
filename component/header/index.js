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
const Header = () => {
    return ( 
        <>
        
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.logo}>
                LOGO
            </Text>
            <View style={styles.interval}>
             <Text style={styles.icon} />
             <Text style={styles.icon} />
             <Text style={styles.icon} />
             </View>
             </View> 
           
            <View style={styles.Product_tab}>
            {/* <TouchableOpacity> */}
            <View style={styles.Product_tab1}> 
            <Text style={{
                textAlign:'center',
                paddingVertical:13,
                letterSpacing:1
                }}>
                정기배송상품
                </Text>     
             </View>
             <View style={styles.Product_tab_show} />
             {/* </TouchableOpacity> */}
             <View style={styles.Product_tab1}>
                 <Text style={{
                textAlign:'center',
                paddingVertical:13,
                letterSpacing:1
                }}>
                    팔로우 브랜드
                </Text>
             </View>
             </View>
             </View>
        </>
        
   )
}

const styles = StyleSheet.create({ 
  container: {
    //   flex:1,
    //   justifyContent:'flex-start',
      height:55,
      borderBottomWidth:1
  },
  interval: {
    flexDirection:'row',
    // justifyContent:'space-between',
    
  },
  header: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:15,
      
      
      height:55, 
    //   backgroundColor:'green',
     
  },
  logo: {
      width:45,
      height:31,
    //   justifyContent:'center',
      textAlignVertical:'center',
      alignItems:'flex-start',
      backgroundColor:'blue'
  },
  icon: {
      
      width:18,
      height:18,
      marginLeft:34.5,
      backgroundColor:'red',
      flexDirection:'row',
    //   justifyContent:'space-between',
  },
  Product_tab: {
    
      flexDirection:'row',
    //   justifyContent:'space-between'
  },
  Product_tab1: {
    //   flex:1,
    width:'50%',
      height:49,
    //   backgroundColor:'red',
    borderBottomWidth:1
    
  },
  Product_tab_show: {
      marginTop:2,
      borderBottomWidth:1
  }
//   icon2: {
//     width:18,
//     height:18,
//     marginLeft:50.5,
//     backgroundColor:'red',
// },



})
export default Header;