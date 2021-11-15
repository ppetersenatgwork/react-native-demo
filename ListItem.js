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

//Functional Style
function ListItem(props) {
    const item = props.item;
    const price = item.price_formatted.split(' ')[0];

    return (
        <TouchableHighlight
            onPress={() => props.onPressItem(props.index)}
            underlayColor='#dddddd'>
            <View>
                <View style={styles.rowContainer}>
                    <Image style={styles.thumb} source={{ uri: item.img_url }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.price}>6tu7igyuhiygjtf</Text>
                        <Text style={styles.title}
                            numberOfLines={1}>{item.title}</Text>
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
        </TouchableHighlight>
    );
}

export default ListItem

//Class style
// class ListItem extends React.PureComponent {
//     _onPress = () => {
//       this.props.onPressItem(this.props.index);
//     }

//     render() {
//       const item = this.props.item;
//       const price = item.price_formatted.split(' ')[0];
//       return (
//         <TouchableHighlight
//           onPress={this._onPress}
//           underlayColor='#dddddd'>
//           <View>
//             <View style={styles.rowContainer}>
//               <Image style={styles.thumb} source={{ uri: item.img_url }} />
//               <View style={styles.textContainer}>
//                 <Text style={styles.price}>{price}</Text>
//                 <Text style={styles.title}
//                   numberOfLines={1}>{item.title}</Text>
//               </View>
//             </View>
//             <View style={styles.separator}/>
//           </View>
//         </TouchableHighlight>
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