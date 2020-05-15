import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  NUMBER_COLUMNS,
  ITEM_WIDTH,
} from "../constant";
import { truncateString } from "../utils/commonFunctions";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { fetchWishListData } from "../MainApp/selectors";

function WishListScreen({ 
  fetchWishListData,
}) {
  const renderItem = ({item}) => {
    return (
        <View style={styles.flexOne}>
          <View style={styles.renderItemMainView}>
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
        </View>
      )
  }

  const renderEmptyComponent = () => {
    return (
      <View style={styles.renderEmptyComponentView}>
        <Text style={styles.emptyListText}>Wish List is Empty</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.headerView} />
      <View style={styles.container}>
        <FlatList 
          data={fetchWishListData.toJS()}
          renderItem={renderItem}
          numColumns={NUMBER_COLUMNS}
          keyExtractor={(item) => item.imdbID}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={{flexGrow: 1}}
          extraData={[fetchWishListData.toJS()]}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  flex:{
    flex:1,
  },
  headerView: {
    flex: 0,
    justifyContent: 'flex-end',
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
    width: (ITEM_WIDTH - 10 * NUMBER_COLUMNS) / NUMBER_COLUMNS
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
  },
  renderEmptyComponentView: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  emptyListText:{
    fontWeight:'bold',
    fontSize:17,
  },
});

const mapStateToProps = createStructuredSelector({
  fetchWishListData: fetchWishListData()
});

const mapDispatchToProps = {
};


export default connect(mapStateToProps,mapDispatchToProps)(WishListScreen)
