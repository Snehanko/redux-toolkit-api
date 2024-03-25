import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("getUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    try {
        const result = await response.json()
        return result
    }
    catch (err) {
        alert("Erro while calling api" + err);
        return err
    }
})

const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {
        alertPop: (state, action) => {
            return alert("Users " + action.payload + " Added")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => { state.isLoading = true }),
            builder.addCase(getUsers.fulfilled, (state, action) => { state.isLoading = false, state.users = action.payload }),
            builder.addCase(getUsers.rejected, (state, action) => { state.isLoading = false, state.error = action.payload })

    }
})

export const { alertPop } = userDetails.actions

export default userDetails.reducer