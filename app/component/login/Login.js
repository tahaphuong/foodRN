import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './LoginStyle';
import App from '../../../App'

export default class Login extends Component {
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa'}}>
				<View>
					<Text style={styles.loginTitle}>Log in to your account</Text>
				</View>

				<View style={styles.centerV}>
					<View style={styles.loginInput}><TextInput style={styles.textLoginInput} placeholder='Email'/></View>
					<View style={styles.loginInput}>
						<TextInput style={styles.textLoginInput} placeholder='Password'/>
						<TouchableOpacity style={styles.forgetPasswordLink}><Text style={styles.textForgetPasswordLink}>Forgot?</Text></TouchableOpacity>
					</View>
				</View>

				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton}>
						<Text style={styles.buttonText}>Log in</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.linkToSignUpCon}>
					<Text style={styles.toSignUp}>Don't have an account? </Text>
					<View>
						<TouchableOpacity>
							<Text style={styles.linkToSignUp}>Sign up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		);
  } 
}