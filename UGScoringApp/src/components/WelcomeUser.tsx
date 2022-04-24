/** @format */

import { View, Text, StyleSheet } from 'react-native'

export default function WelcomeUser() {
	return (
		<View>
			<Text style={styles.title}>Welcome User</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 30,
	},
})
