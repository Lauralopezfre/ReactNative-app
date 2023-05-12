import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ScrollView, } from "react-native";
import User from "../components/User";
import AppContext, { useAppContext } from "../context";

export default function Home(props) {
  const [users, setUsers] = React.useState([])
  const [current, setCurrent] = React.useState(1)
  const {usersRemoved, setUsersRemoved} = useAppContext()

  useEffect(() => {
    if (props.route.params?.userId !== undefined) {
      removeUser()
    }
  }, [props.route.params?.userId])

  useEffect(() => {
    getUserFetch()
  }, [current])

  const getUserFetch = async()=>{
    const response = await fetch('https://randomuser.me/api/?page='+current+'&results=10&seed=abc');
    const data = await response.json();
    getUserCurrent(data.results);
  }

  const getUserCurrent =(data)=>{
    if(usersRemoved.length>0){
      let copyUsers = data
      for (let index = 0; index < usersRemoved.length; index++) {
        copyUsers = copyUsers.filter((user)=>user.id.value !== usersRemoved[index].id.value)
      }
      setUsers(copyUsers)
    }else{
      setUsers(data)
    }
  }

  const removeUser = () => {
    let copyUsers = [...users]
    const userRemoved = copyUsers.filter((user) => user.id.value === props.route.params.userId.id.value)
    copyUsers.splice(copyUsers.findIndex((user) => user.id.value === props.route.params.userId.id.value), 1);
    setUsers(copyUsers)
    setUsersRemoved([...usersRemoved, userRemoved[0]])
  }

  return (
    <><SafeAreaView style={styles.container}>
      <ScrollView r style={styles.scrollView}>

        <View style={styles.container}>
          {users?.map((user, index) => (
            <User key={index} user={user} index={index + 1} />
          ))}

          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
            <TouchableOpacity 
                onPress={()=>{setCurrent(current===1?current:current-1)}}>
                <Text style={{ fontSize: 20, color: '#484844' }}>Prev</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=>{setCurrent(current+1)}}>
                <Text style={{ fontSize: 20, color: '#484844' }}>Next</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },

});

