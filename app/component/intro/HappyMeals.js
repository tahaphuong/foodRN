import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground, TouchableOpacity, TextInput, PickerIOS } from 'react-native'
import { styles } from '../login/LoginStyle';
import App from '../../../App'

export default class HappyMeals extends Component {
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa'}}>
			<View style={styles.foodImgCon}>
        <ImageBackground source={require('../../img/food8.png')} style={{width: '100%', height: 360}} />
      </View>
      <View style={styles.toBottom}>
        <View style={styles.happyMealsCon}>
          <Text style={styles.titleHappyMeals}>Happy meals</Text>
          <Text style={styles.introHappyMeals}>Discover the best foods from over 1,000 restaurants.</Text>
          <TouchableOpacity style={styles.buttonHappyMeals}>
            <Text style={styles.textButtonHappyMeals}>Get Started</Text>
          </TouchableOpacity>
				</View>
      </View>
			</SafeAreaView>
		);
  } 
}
