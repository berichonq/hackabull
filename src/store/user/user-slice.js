import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        data: {},
    },
    reducers: {
        logOn: (state, action) => {
            state.isAuthenticated = true;
            state.data = action.payload
        },
        logOff: (state) => {
            state.isAuthenticated = false
            state.data = {}
        },
    },
})

export const {logOn, logOff} = userSlice.actions
export default userSlice.reducer