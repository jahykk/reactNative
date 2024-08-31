import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlastListExample from './components/FlastListExample';
import FlatListcallBackend from './components/FlatListcallBackend';
import NewApp from './components/NewApp';
import AxiosgetData from './components/AxiosgetData';

import WeatherLondon from './components/WeatherLondon';
import WeatherBangkok from './components/WeatherBangkok';
import ModelExample from './components/ModelExample';
import WeatherApp from './components/WeatherApp';
 
const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/>
      <FlatListcallBackend/> 
      <NewApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      <WeatherApp/>

    </View>
  )
};
 
export default App;