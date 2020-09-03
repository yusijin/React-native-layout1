import React from 'react';
import Counter from './Counter';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
 const CardCheck = () => {

    return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',
    }}>
            <Text>
                선택상품 : Aset
            </Text>
            <Text>
                X
            </Text>  
        </View>
        <View>
            <Text>
                구독횟수 : 8회
            </Text>
            <Text>
                구독주기 : 격주
            </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
            <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
            </View>
            <View>
                <Counter>
                </Counter>
                </View>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        height:'20%',
    }
})
 

export default CardCheck;