/** @format */

import { StyleSheet } from 'react-native'
import Container from '../src/components/Container'
import EditScreenInfo from '../src/components/EditScreenInfo'
import { Text, View } from '../src/components/Themed'
import { RootTabScreenProps } from '../types'

export default function Registration({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<Container>
			<>
				<Text style={styles.title}>Hello I am tab one</Text>
				<View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
				<EditScreenInfo path='/screens/TabOneScreen.tsx' />
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
