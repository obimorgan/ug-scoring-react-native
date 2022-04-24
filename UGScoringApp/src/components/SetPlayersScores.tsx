/** @format */
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SinglePlayerScore from './SinglePlayerScore'
import SetPlayersScoreHeader from './SetPlayersScoresHeader'
import { players } from '../../Data/Players'

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
		<>
			{players.map((player, index) => {
				return (
					<View key={index} style={styles.container}>
						<SinglePlayerScore add={handleAddScore} minus={minusScore} score={score} player={player} />
					</View>
				)
			})}
		</>
	)
}
export default SetPlayersScores

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
