import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type DataUser = {
    login: string
    password: string
}

const initialState = {
    auth: false,
    login: '',
    _login: 'developer21',
    _password: '123456'
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        loginUser(state, action: PayloadAction<{ data: DataUser }>) {
            if (
                state._login === action.payload.data.login &&
                state._password === action.payload.data.password
            ) {
                state.login = action.payload.data.login
                state.auth = true
            }
        },
        logoutUser(state, action: PayloadAction<{ value: boolean }>) {
            state.login = ''
            state.auth = action.payload.value
        }
    }
})

export const AppReducer = slice.reducer

export const {loginUser} = slice.actions
export const {logoutUser} = slice.actions