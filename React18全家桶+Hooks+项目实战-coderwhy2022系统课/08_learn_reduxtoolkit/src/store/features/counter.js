import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 110
    },
    reducers: {
        addNumber(state, { payload }) {
            state.counter = state.counter + payload
        },

        // subNumber(state, action) {
        //     const payload = action.payload
        //     state.counter = state.counter - payload
        // },

        // 直接从action中解构出payload
        subNumber(state, { payload }) {
            state.counter = state.counter - payload
        },
    }
})
export const { addNumber, subNumber } = counterSlice.actions

export default counterSlice.reducer