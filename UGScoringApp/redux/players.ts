/** @format */

import { createSlice } from '@reduxjs/toolkit'
import { players } from '../Data/Players'

const playerDetail = createSlice({
	name: 'players',
	initialState: {
		isLoggedIn: false,
		currentUser: null,
	},
	reducers: {
		setLoggedInPlayer: (state, action) => {
			state.isLoggedIn = true
		},
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload
		},
	},
})

export default playerDetail
