import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../utils/Loader';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { FontAwesome } from 'react-native-vector-icons';
import { truncateString } from "../utils/commonFunctions";
import {
  NUMBER_COLUMNS,
  ITEM_WIDTH,
  COLORS,
} from "../constant";
import { 
  fetchMovieData,
  fetchSelectedMovie,
  fetchWishListData,
  fetchLoaderStatus,
} from "../MainApp/selectors";
import { 
  toggleTheValueOfSelectedMovie,
  updateWishList,
  getSearchTermResult,
} from "../MainApp/actions";

function SearchScreen({
  fetchMovieData,
  fetchSelectedMovie,
  toggleTheValueOfSelectedMovie,
  updateWishList,
  fetchWishListData,
  getSearchTermResult,
  loader,
}) {

useEffect(() => {
  getSearchTermResult('fire')
},[])

const debounce = function (callback,delay){
  let timer
  return function (data){
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(data)
    },delay)
  }
}


const onChange = debounce(getSearchTermResult, 500);

const addToWishList = (item) => {
      const selectedMovieObj = fetchSelectedMovie.toJS()
     const wishListMovies = fetchWishListData.toJS()
     let newWishList = []
     const newSelectedMovieList = {
       ...selectedMovieObj,
       [item.imdbID]: selectedMovieObj[item.imdbID] ? false : true
     }
     
    if(selectedMovieObj[item.imdbID]){
      newWishList = wishListMovies.filter(obj => obj.imdbID !== item.imdbID)
    }else{
      newWishList = [...wishListMovies, item]
    }

    toggleTheValueOfSelectedMovie(newSelectedMovieList)
    updateWishList(newWishList)  
}

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.flexOne} onPress={() => addToWishList(item)}>
        <View style={styles.startView}>
          <FontAwesome 
            name={fetchSelectedMovie.toJS()[item.imdbID] ? "star" : 'star-o'}
            color={COLORS.mainThemeColor}
            size={30}
          />
        </View>
        <View style={[styles.renderItemMainView]}>
          <Image 
            source={{uri : item.Poster}} 
            resizeMode="contain"
            style={styles.renderImageStyle}
          />
        </View>
        <View style={styles.renderTextView}>
          <Text style={styles.textStyle}>{truncateString(item.Title,20)}</Text>
          <Text style={styles.textStyle}>{`Year:- ${item.Year}`}</Text>
        </View>
      </TouchableOpacity>
    )
}

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerView}>
          <View style={styles.searchView}>
              <View style={styles.searchViewWithElement}>
                  <FontAwesome
                      style={styles.iconStyle}
                      name="search"
                      color={COLORS.mainThemeColor}
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
         {
          loader
          ? <Loader isLoading={loader} />
          : <FlatList 
              data={fetchMovieData.toJS()}
              renderItem={renderItem}
              numColumns={NUMBER_COLUMNS}
              keyExtractor={(item) => item.imdbID}
              extraData={[fetchSelectedMovie.toJS(),fetchMovieData.toJS()]}
            />
         }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
      flex: 1,
      backgroundColor: COLORS.mainThemeColor
  },
  headerView: {
      height: 90,
      backgroundColor: COLORS.mainThemeColor,
      flex: 0,
      justifyContent: 'flex-end',
  },
  searchView: {
      backgroundColor: COLORS.whiteColor,
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
  renderItemMainView: {
    height: 200,
    width: (ITEM_WIDTH - 10 * NUMBER_COLUMNS) / NUMBER_COLUMNS,
    margin: 5,
    flex:1,
  },
  renderImageStyle: {
    width: (ITEM_WIDTH - 10 * NUMBER_COLUMNS) / NUMBER_COLUMNS,
    height: 200,
  },
  renderTextView:{
    flex:1,
    flexDirection:'column',
  },
  textStyle:{
    textAlign:'center',
    fontWeight:'bold',
  },
  startView: {
    position:'absolute',
    top: 10, 
    right: 40,
    zIndex: 10,
  },
  flexOne:{
    flex: 1
  }
});

const mapStateToProps = createStructuredSelector({
  fetchMovieData: fetchMovieData(),
  fetchSelectedMovie: fetchSelectedMovie(),
  fetchWishListData: fetchWishListData(),
  loader: fetchLoaderStatus(),
});


const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheValueOfSelectedMovie: (data) => dispatch(toggleTheValueOfSelectedMovie(data)),
    updateWishList: (data) => dispatch(updateWishList(data)),
    getSearchTermResult: (data) => dispatch(getSearchTermResult(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen)
