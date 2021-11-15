'use strict';

import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import SearchPage from './SearchPage';

//Functional Style
function App() {
  const [toggled, setToggled] = useState(false);

  const about = toggled ? <Text>TEST</Text> : null;

  return (
    <View>
      <SearchPage />
      <Button
        onPress={() => setToggled(!toggled)}
        color='#48BBEC'
        title='Go'
      />
      {about}
    </View>
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