'use strict';

import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import ListItem from './ListItem';

//Functional style
function SearchResults({route}) {
  console.log(route)
  console.log(route.params.listings)

  function _renderItem({ item, index }) {
    return (<ListItem
      item={item}
      index={index}
      onPressItem={_onPressItem}
    />
    );
  }

  function _onPressItem(index) {
    console.log("Pressed row: " + index);
  };

  return (
    <FlatList
      data={route.params.listings}
      keyExtractor={(item, index) => index}
      renderItem={_renderItem}
    />
  );
}

export default SearchResults

//Class style
// export default class SearchResults extends Component {
//     _keyExtractor = (item, index) => index;

//     _renderItem = ({item}) => {
//       return (
//         <TouchableHighlight
//           underlayColor='#dddddd'>
//           <View>
//             <Text>{item.title}</Text>
//           </View>
//         </TouchableHighlight>
//       );

//     };

//     render() {
//       return (
//         <FlatList
//           data={this.props.listings}
//           keyExtractor={this._keyExtractor}
//           renderItem={this._renderItem}
//         />
//       );
//     }
//   }

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});
