import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../utils/Loader';
import { FontAwesome } from 'react-native-vector-icons';

function SearchScreen({
  navigation,
}) {


const debounce = function (callback,delay){
  let timer
  return function (data){
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(data)
    },delay)
  }
}

  // const onChange = debounce(setDataAfterTimeOut, 300);
  const onChange = debounce(() => console.log('called'), 300);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerView}>
          <View style={styles.searchView}>
              <View style={styles.searchViewWithElement}>
                  <FontAwesome
                      style={styles.iconStyle}
                      name="search"
                      color={"#F7882F"}
                      size={16}
                  />
                  <TextInput
                      style={styles.textInputStyle}
                      placeholder="Search Movie Name"
                      onChangeText={onChange}
                  />
              </View>
          </View>
      </View>
      <View style={styles.container}>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
      flex: 1,
      backgroundColor: '#F7882F'
  },
  headerView: {
      height: 90,
      backgroundColor: '#F7882F',
      flex: 0,
      justifyContent: 'flex-end',
  },
  searchView: {
      backgroundColor: '#fff',
      height: 50,
      marginTop: 0,
      margin: 10,
      borderRadius: 5,
  },
  searchViewWithElement: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
  },
  iconStyle: {
      margin: 10,
  },
  textInputStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default SearchScreen
