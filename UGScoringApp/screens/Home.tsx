/** @format */

import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import ProfileAvatar from '../components/ProfileAvatar'
import WelcomeUser from '../components/WelcomeUser'
import CreateButton from '../components/CreateButton'
import JoinButton from '../components/JoinButton'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<View style={styles.container}>
			<WelcomeUser />
			<ProfileAvatar />
			<CreateButton />
			<JoinButton />
			{/* <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' /> */}
			{/* <EditScreenInfo path='/screens/TabOneScreen.tsx' /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
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
