import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import authReducer from './features/auth/authSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
		},
	});
};

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// infer the RootState and AppDispatch type from store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
