/** @format */

import { View, StyleSheet } from 'react-native'
import SinglePlayerScore from './SinglePlayerScore'
import SetPlayersScoreHeader from './SetPlayersScoresHeader'

const SetPlayersScores = () => {
	return (
		<View style={styles.container}>
			{/* <SetPlayersScoreHeader /> */}
			<SinglePlayerScore />
			<SinglePlayerScore />
			<SinglePlayerScore />
			<SinglePlayerScore />
		</View>
	)
}
export default SetPlayersScores

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
