import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface DetailUserState {
    userDetail: any
    loading: boolean
}

const initialState: DetailUserState = {
    userDetail: [],
    loading: false,
}

export const getDetailUser: any = createAsyncThunk(
    //action type string
    'user/getUserDetail',
    // callback function
    async (username: any) => {
        const res = await fetch(
            `https://api.github.com/users/${username}`
        ).then((data) => data.json())
        return res
    }
)

export const userDetailSlice = createSlice({
    name: 'detailUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetailUser.pending, (state: any) => {
            state.loading = true
        })
        builder.addCase(getDetailUser.fulfilled, (state: any, { payload }) => {
            state.loading = false
            state.userDetail = payload
        })
        builder.addCase(getDetailUser.rejected, (state: any) => {
            state.loading = false
        })
    },
})

export default userDetailSlice.reducer
