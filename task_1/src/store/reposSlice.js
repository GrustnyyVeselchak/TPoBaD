import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
    name: 'repos',
    initialState: {
        repos:[],
        error: null,
        loading: false
    },
    reducers: {
        gettingRepos: state => {
            state.repos = []
            state.error =  null
            state.loading = true
        },
        errorRepos: (state, action) => {
            state.repos = []
            state.error  = action.payload
            state.loading = false
        },
        successRepos: (state, action) => {
            state.repos = action.payload
            state.error = null
            state.loading = false
        }
    }
})

export const { gettingRepos, errorRepos, successRepos} = reposSlice.actions

export default reposSlice.reducer