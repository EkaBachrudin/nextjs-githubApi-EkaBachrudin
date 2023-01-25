import { configureStore } from '@reduxjs/toolkit'
import searchUserReducer from './slices/searchUserSlice'
import userDetailReducer from './slices/detailUserSlice'

export const store = configureStore({
    reducer: {
        searchUser: searchUserReducer,
        detailUser: userDetailReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
