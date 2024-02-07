import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        Login: (state, action) => {
            console.log(action)
            state.isAuth = true;
            state.user = action.payload;
        },
        Logout: (state, action) => {
            state.isAuth = false;
            state.user = {};
        },
    }
});

export const {setAuth,Login,Logout} = userSlice.actions;
export default userSlice.reducer;