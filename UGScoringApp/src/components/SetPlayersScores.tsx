/** @format */
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SinglePlayerScore from './SinglePlayerScore'
import SetPlayersScoreHeader from './SetPlayersScoresHeader'

const SetPlayersScores = () => {
	const [score, setScore] = useState(0)
	const handleAddScore = () => {
		setScore(score + 1)
		console.log('Minus -1')
	}
	const minusScore = () => {
		setScore(score - 1)
		console.log('Add +1')
	}

	return (
		<View style={styles.container}>
			<SinglePlayerScore add={handleAddScore} minus={minusScore} score={score} />
		</View>
	)
}
export default SetPlayersScores

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
