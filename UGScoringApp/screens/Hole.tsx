/** @format */

import { View, Text, StyleSheet } from 'react-native'
import Container from '../components/Container'
import NextButton from '../components/NextButton'
import SetPlayersScores from '../components/SetPlayersScores'

const Hole = () => {
	return (
		<Container>
			<>
				<View style={styles.title}>
					<Text>Hole 1</Text>
				</View>
				<View style={styles.player}>
					<SetPlayersScores />
				</View>
				<View style={styles.button}>
					<NextButton />
				</View>
			</>
		</Container>
	)
}

export default Hole

const styles = StyleSheet.create({
	title: {
		height: '30%',
		// borderWidth: 1,
		justifyContent: 'center',
	},
	player: {
		height: '50%',
		// borderWidth: 1,
		justifyContent: 'center',
	},
	button: {
		height: '20%',
		justifyContent: 'center',
		// borderWidth: 1,
	},
})
//
