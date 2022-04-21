/** @format */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function SocialMediaLogin() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={styles.btnWrapper}>
				<FontAwesome name='facebook' size={24} color='black' />
			</View>
			<View style={styles.btnWrapper}>
				<FontAwesome name='google' size={24} color='black' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btnWrapper: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 2,
	},
})
