/** @format */

import { StyleSheet, TouchableOpacity } from 'react-native'
import Container from '../src/components/Container'
import { Text, View } from '../src/components/Themed'
import { RootStackScreenProps } from '../types'

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
	return (
		<Container>
			<>
				<Text style={styles.title}>This screen doesn't exist.</Text>
				<TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
					<Text style={styles.linkText}>Go to home screen!</Text>
				</TouchableOpacity>
			</>
		</Container>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
})
