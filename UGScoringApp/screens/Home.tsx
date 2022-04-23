/** @format */

import { StyleSheet } from 'react-native'
import Container from '../components/Container'
import CreateButton from '../components/CreateButton'
import JoinButton from '../components/JoinButton'
import ProfileAvatar from '../components/ProfileAvatar'
import WelcomeUser from '../components/WelcomeUser'
import { RootTabScreenProps } from '../types'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<Container>
			<>
				<WelcomeUser />
				<ProfileAvatar />
				<CreateButton />
				<JoinButton />
				{/* <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' /> */}
				{/* <EditScreenInfo path='/screens/TabOneScreen.tsx' /> */}
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
