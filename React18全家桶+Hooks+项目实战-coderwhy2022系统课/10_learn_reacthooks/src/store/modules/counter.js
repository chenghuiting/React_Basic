import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 99,
    },
    reducers: {
        addNumberAction(state, { payload }) { //从action中结构出payload
            state.count = state.count + payload
        },
        subNumberAction(state, { payload }) {
            state.count = state.count - payload
        }
    }
})
export const { addNumberAction, subNumberAction } = counterSlice.actions
export default counterSlice.reducer