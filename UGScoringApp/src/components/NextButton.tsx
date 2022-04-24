/** @format */

import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'

export default function NextButton() {
	return (
		<View>
			<Pressable style={({ pressed }) => [styles.btnContainer, pressed ? styles.btnPressed : null]}>
				<Text>Next</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '80%',
		height: 80,
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		elevation: 4,
		backgroundColor: 'white', // need to add white background to see shadow
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	btnContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		height: 50,
		width: 50,
		margin: 16,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		elevation: 4,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	btnPressed: {
		opacity: 0.5,
	},
})
