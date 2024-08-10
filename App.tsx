import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlastListExample from './components/FlastListExample';
import FlatListcallBackend from './components/FlatListcallBackend';
import NewApp from './components/NewApp';
 
const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      <FlastListExample/>
      <FlatListcallBackend/> 
      <NewApp/>
    </View>
  )
};
 
export default App;