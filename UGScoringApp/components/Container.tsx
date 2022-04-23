/** @format */

import { View, StyleSheet } from 'react-native'

interface IProps {
	children: JSX.Element
}

export default function Container({ children }: IProps) {
	return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
})
