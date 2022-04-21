/** @format */

import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import SocialMediaLogin from '../components/SocialMediaLogin'
import React, { useState } from 'react'

export default function Login({ navigation }: RootTabScreenProps<'TabOne'>) {
	const [loginCredentials, setLoginCredentials] = useState({})
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredPassword, setEnteredPasssword] = useState('')

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<EmailInput />
			<PasswordInput />
			<View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
			<SocialMediaLogin />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
