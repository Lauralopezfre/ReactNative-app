
    import { useNavigation } from 'expo-router';
    import React from 'react'
    import {StyleSheet, Image, Text, Dimensions, View, TouchableOpacity} from 'react-native';

    const { width: widthScreen} = Dimensions.get('screen');

    const User = ({user, index}) => {
    const navigation = useNavigation();

    const onPressUser = () => {
        navigation.navigate('Details', {userId: user})  
    }

    return (
        <TouchableOpacity onPress={onPressUser} style={[ styles.container, index % 2 === 0 && styles.seconBg]}>
            <View>
                <Image  source={{uri: user.picture?.thumbnail}} style={styles.avatar} />
            </View>

        <Text style={styles.text}>
                {user.name.first} {user.name.last}
        </Text>
    
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#6C757D',
            flexDirection:'row',
            padding:5,
            borderRadius:20, 
            margin:5,
            alignItems:'center'
        },
        seconBg: {
    backgroundColor: '#007BFF',
        },
        avatar: {
        resizeMode:'contain', 
        height: widthScreen / 8,
        width: widthScreen / 9,
        borderRadius: 100,
        maxWidth: 50,
        maxHeight:50,
        marginLeft:10,
        },
    text: {
        color: '#fff',
        textAlign: 'center',
        flex:1,
    }
    });

    export default User