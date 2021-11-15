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
} from 'react-native';

import SearchResults from './SearchResults';

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };
    data[key] = value;

    const querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return 'https://api.nestoria.co.uk/api?' + querystring;
}

//Functional style
function SearchPage({ navigation }) {
    const [searchString, setSearchString] = useState('london');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [toggled, setToggled] = useState(false);
  
    const about = toggled ? <Text>TEST</Text> : null;

    function _executeQuery(query) {
        console.log(query);
        setIsLoading(true)
        // fetch(query, { timeout: 100 })
        //     .then(response => response.json())
        //     .then(json => _handleResponse(json.response))
        //     .catch(error => {
        //         setIsLoading(false)
        //         setMessage('Something bad happened ' + error)
        //     });

        //Temporary code while API call is not working
        const listings = [{ title: 'A Test Place', price_formatted: '$300,000,000 ', img_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }];
        navigation.navigate('Details', {listings})
        setIsLoading(false)
    };


    function _handleResponse(response) {
        setIsLoading(false)
        setMessage('')
        if (response.application_response_code.substr(0, 1) === '1') {
            navigation.navigate('Details', {listings: response.listings})
        } else {
            setMessage('Location not recognized; please try again.');
        }
    };

    const spinner = isLoading ?
        <ActivityIndicator size='large' color="#0000FF" /> : null;

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Search for houses to buy!
            </Text>
            <Text style={styles.description}>
                Search by place-name or postcode.
            </Text>
            <View style={styles.flowRight}>
                <TextInput
                    style={styles.searchInput}
                    value={searchString}
                    onChangeText={setSearchString}
                    placeholder='Search via name or postcode' />

                <Button
                    onPress={() => _executeQuery(urlForQueryAndPage('place_name', searchString, 1))}
                    color='#48BBEC'
                    title='Go'
                />
            </View>
            <Image source={require('./resources/house.png')} style={styles.image} />
            {spinner}
            <Text style={styles.description}>{message}</Text>
            {/* <SearchResults listings={listings} /> */}
        <Button
          onPress={() => setToggled(!toggled)}
          color='#48BBEC'
          title='Go'
        />
        {about}
        </View>
    );
}

export default SearchPage

// //Class style
// export default class SearchPage extends Component {
//     constructor(props) {
//         super(props); this.state = {
//             searchString: 'london',
//             isLoading: false,
//             message: '',
//         };
//     }

//     _onSearchTextChanged = (event) => {
//         this.setState({ searchString: event.nativeEvent.text });
//     };

//     _executeQuery = (query) => {
//         console.log(query);
//         this.setState({ isLoading: true });
//         fetch(query, {timeout: 100})
//             .then(response => response.json())
//             .then(json => this._handleResponse(json.response))
//             .catch(error =>
//                 this.setState({
//                     isLoading: false,
//                     message: 'Something bad happened ' + error
//                 }));
//     };

//     _onSearchPressed = () => {
//         const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
//         this._executeQuery(query);
//     };

//     _handleResponse = (response) => {
//         this.setState({ isLoading: false, message: '' });
//         if (response.application_response_code.substr(0, 1) === '1') {
//             console.log('Properties found: ' + response.listings.length);
//         } else {
//             this.setState({ message: 'Location not recognized; please try again.' });
//         }
//     };

//     render() {
//         const spinner = this.state.isLoading ? 
//             <ActivityIndicator size='large' color="#0000FF"/> : null;

//         return (
//             <View style={styles.container}>
//                 <Text style={styles.description}>
//                     Search for houses to buy!
//                 </Text>
//                 <Text style={styles.description}>
//                     Search by place-name or postcode.
//                 </Text>
//                 <View style={styles.flowRight}>
//                     <TextInput
//                         style={styles.searchInput}
//                         value={this.state.searchString}
//                         onChange={this._onSearchTextChanged}
//                         placeholder='Search via name or postcode' />

//                     <Button
//                         onPress={this._onSearchPressed}
//                         color='#48BBEC'
//                         title='Go'
//                     />
//                 </View>
//                 <Image source={require('./resources/house.png')} style={styles.image} />
//                 {spinner}
//                 <Text style={styles.description}>{this.state.message}</Text>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    image: {
        width: 217,
        height: 138,
    },
});
