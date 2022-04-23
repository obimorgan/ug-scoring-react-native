/** @format */
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SinglePlayerScore from './SinglePlayerScore'
import SetPlayersScoreHeader from './SetPlayersScoresHeader'

const SetPlayersScores = () => {
	const [score, setScore] = useState(0)
	const handleAddScore = () => {
		setScore(score - 1)
	}
	const minusScore = () => {
		setScore(score - 1)
	}
	return (
		<View style={styles.container}>
			{/* <SetPlayersScoreHeader /> */}
			<SinglePlayerScore add={handleAddScore} minus={minusScore} />
			<SinglePlayerScore add={handleAddScore} minus={minusScore} />
			<SinglePlayerScore add={handleAddScore} minus={minusScore} />
			<SinglePlayerScore add={handleAddScore} minus={minusScore} />
		</View>
	)
}
export default SetPlayersScores

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
