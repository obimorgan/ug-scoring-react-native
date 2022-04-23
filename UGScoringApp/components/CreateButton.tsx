/** @format */

import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'

export default function CreateButton() {
	return (
		<View style={styles.container}>
			<Pressable style={({ pressed }) => [styles.btnContainer, pressed ? styles.btnPressed : null]}>
				<Text>Start Game </Text>
			</Pressable>
			<Text style={styles.innerText}> Create a new game</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '80%',
		height: 80,
		margin: 16,
		// padding: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		elevation: 4,
		backgroundColor: 'white', // need to add white background to see shadow
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	btnContainer: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		// borderWidth: 1,
		height: '100%',
		width: '50%',
		backgroundColor: 'red',
	},
	btnPressed: {
		opacity: 0.5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	innerText: {
		margin: 7,
	},
})
