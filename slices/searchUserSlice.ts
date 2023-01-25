import { User } from '@/types/User'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface SearchUserState {
    users: User[]
    search: string
    loading: boolean
}

const initialState: SearchUserState = {
    users: [],
    search: '',
    loading: false,
}

export const getUsers: any = createAsyncThunk(
    //action type string
    'users/getUsers',
    // callback function
    async (s) => {
        const res = await fetch(
            `https://api.github.com/search/users?q=${s}&per_page=20`
        ).then((data) => data.json())
        let response = {
            res: res,
            search: s,
        }
        return response
    }
)

export const searchUserSlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state: any) => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state: any, { payload }) => {
            state.loading = false
            state.users = payload.res.items
            state.search = payload.search
        })
        builder.addCase(getUsers.rejected, (state: any) => {
            state.loading = false
        })
    },
})

export default searchUserSlice.reducer
