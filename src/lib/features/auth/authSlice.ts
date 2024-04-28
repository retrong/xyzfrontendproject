import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userData: {},
	},
	reducers: {
		login: (state, action) => {
			const data = action.payload;
			state.userData = data;
		},
	},
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
