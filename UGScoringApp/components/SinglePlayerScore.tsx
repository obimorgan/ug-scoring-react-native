/** @format */

import { View, Text, StyleSheet, Platform } from 'react-native'

export default function SinglePlayerScore() {
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text>Players name</Text>
				<View style={styles.iconContainer}>
					<Text>-</Text>
				</View>
				<View style={styles.iconContainer}>
					<Text>+</Text>
				</View>
				<View style={styles.iconContainer}>
					<Text>0</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 320,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		elevation: 4,
		backgroundColor: 'white', // need to add white background to see shadow
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		marginVertical: 2,
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		padding: 16,
		height: 60,
		justifyContent: 'space-between',
	},
	iconContainer: {
		marginHorizontal: 5,
	},
})
