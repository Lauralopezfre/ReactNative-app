
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, TextInput} from 'react-native'
const { width: widthScreen} = Dimensions.get('screen');

const Details = (props) => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({})
  
  useEffect(() => {
    setUserDetails(props.route.params.userId)
  },[])

  const removeUser = () =>{
    navigation.navigate('Home', {userId: userDetails})  
  }

  return (
    <View style={{alignItems: 'center', flex:1}}>
      <Text style={
        {
          fontSize: 35,
        }
      }>Settings</Text>

        <View>
            <Image source={{uri: userDetails.picture?.large}} style={styles.avatar} />
        </View>

        <View style={{width:'80%'}}>
          <Text style={styles.text}>FullName</Text>
          <TextInput
            style={styles.input}
            value={userDetails.name?.title + ' ' + userDetails.name?.first + ' ' + userDetails.name?.last}>
            
          </TextInput>
          <Text style={styles.text}>Age</Text>
          <TextInput
            style={styles.input}
            value={userDetails.dob?.date}>
            
          </TextInput>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            value={userDetails.email}>
            
          </TextInput>
          <Text style={styles.text}>Phone</Text>
          <TextInput
            style={styles.input}
            value={userDetails.phone}>
            
          </TextInput>
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.input}
            value={userDetails.location?.city}>
            
          </TextInput>
        </View>
        
        
        <Button
          onPress={removeUser}
          title="Remove"
          color="#841584"
        />
    </View>
  )

  
}

const styles = StyleSheet.create({
  avatar: {
    resizeMode:'contain', 
    height: widthScreen,
    width: widthScreen,
    borderRadius: 100,
    maxWidth: 50,
    maxHeight:50,
    marginLeft:10,
  },
text: {
  fontSize: 21
},
input: {
  height: 40,
  width: '80%',
  margin: 12,
  backgroundColor:'white',
  padding: 10,
},
});



export default Details