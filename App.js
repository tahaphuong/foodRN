/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DemoComponent from './app/component/DemoComponent';
import Login from './app/component/login/Login'
import ForgotPassword from './app/component/login/ForgotPassword'
import HappyMeals from './app/component/intro/HappyMeals'

export const App: () => React$Node = () => {
  const [logged, set] = React.useState(false)
  const [fromName, passFromName] = React.useState('')
  const [toName, passToName] = React.useState('')
  const [wishing, passWishing] = React.useState('')
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity>
					<Text style={styles.backButton}>‹</Text>
				</TouchableOpacity>
        
        <Login/>
        {/* <ForgotPassword/> */}
        {/* <HappyMeals/> */}
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginTop: 0,
    marginBottom: 20,

    marginLeft: '5%',
    fontSize: 45,
    fontWeight: 'bold'
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderColor: 'black', 
    borderWidth: 1, 
    marginTop: 20,
  },
  inputLong: {
    borderColor: 'black', 
    borderWidth: 1, 
    textAlignVertical: 'top',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'pink',
    marginTop: 20
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
