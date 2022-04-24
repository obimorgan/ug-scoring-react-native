/** @format */

import { View, Text, StyleSheet, Platform, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface IProps {
	add: () => any
	minus: () => any
	score: number
}

export default function SinglePlayerScore({ add, minus, score }: IProps) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<Text>Players name</Text>
					<View style={styles.iconDetails}>
						<Text>{score}</Text>
					</View>
				</View>
			</View>
			<View style={styles.iconsContainer}>
				<Pressable style={styles.iconDetails} onPress={minus}>
					<AntDesign name='minuscircle' size={30} color='black' />
				</Pressable>
				<Pressable style={styles.iconDetails} onPress={add}>
					<AntDesign name='pluscircle' size={30} color='black' />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
	},
	container: {
		flexDirection: 'row',
		width: '50%',
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
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '50%',
	},
	iconDetails: {
		marginHorizontal: 2,
	},
})
