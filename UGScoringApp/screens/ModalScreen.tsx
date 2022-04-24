/** @format */

import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import Container from '../src/components/Container'
import EditScreenInfo from '../src/components/EditScreenInfo'
import { Text, View } from '../src/components/Themed'

export default function ModalScreen() {
	return (
		<Container>
			<>
				<Text style={styles.title}>Modal</Text>
				<View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
				<EditScreenInfo path='/screens/ModalScreen.tsx' />

				{/* Use a light status bar on iOS to account for the black space above the modal */}
				<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			</>
		</Container>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
