/** @format */

import { View, StyleSheet, Text } from 'react-native'
import SinglePlayerScore from './SinglePlayerScore'

const SetPlayersScoreHeader = () => {
	return (
		<View style={styles.container}>
			<Text>Players</Text>
			<Text>Score</Text>
		</View>
	)
}
export default SetPlayersScoreHeader

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// width: '100%',
		justifyContent: 'space-between',
	},
})
