'use strict';

import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import SearchPage from './SearchPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from 'react-navigation';
import SearchResults from './SearchResults';

//Functional Style
function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View>
        <SearchPage />
        <Button
          onPress={() => setToggled(!toggled)}
          // onPress={() => navigation.navigate('Details')}
          color='#48BBEC'
          title='Go'
        />
        {about}
      </View>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      // </View>
    );
  }

  function DetailsScreen() {
    return (
      <SearchResults />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SearchPage} />
        <Stack.Screen name="Details" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

// //Class style
// export default class App extends Component {
//   constructor(props) {
//     super(props); this.state = {
//       toggled: false
//     };
//   }

//   _toggle = (event) => {
//     this.setState({ toggled: !this.state.toggled });
//   };


//   render() {
//     const about = this.state.toggled ? <Text>TEST</Text> : null;

//     return (
//       <View>
//         <SearchPage />
//         <Button
//           onPress={this._toggle}
//           color='#48BBEC'
//           title='Go'
//         />
//         {about}
//       </View>
//     )
//   }
// }