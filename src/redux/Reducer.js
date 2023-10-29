import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //menambahkan todos
        addTodos : (state, action) {
            state.push(action.payload)
            return state
    }
})

