/** @format */

import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

const PasswordInput = () => {
	const [text, onChangeText] = React.useState('')

	return (
		<View style={styles.btnBorder}>
			<View style={styles.btnWrapper}>
				<Icon name='lock' size={24} color='black' />
				<TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder='Enter password..' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btnBorder: {
		borderWidth: 1,
		borderRadius: 5,
	},
	btnWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	input: {
		height: 30,
		width: 250,
		marginLeft: 8,
	},
})

export default PasswordInput
