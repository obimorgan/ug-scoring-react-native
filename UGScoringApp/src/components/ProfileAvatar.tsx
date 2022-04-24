/** @format */

import { View, Image, StyleSheet } from 'react-native'

export default function ProfileAvatar() {
	return (
		<View style={styles.imgContainer}>
			<Image
				style={styles.image}
				source={{
					uri: 'https://images.unsplash.com/photo-1561046259-7d5b6e929ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80',
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	imgContainer: {
		marginVertical: 2,
		borderRadius: 100,
		// borderWidth: 0.5,
		width: 100,
		height: 100,
		elevation: 4,
		backgroundColor: 'white', // need to add white background to see shadow
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	image: {
		borderRadius: 100,
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		resizeMode: 'cover',
	},
})
