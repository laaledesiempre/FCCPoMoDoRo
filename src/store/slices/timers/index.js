import {createSlice} from "@reduxjs/toolkit"

const timersSlice=createSlice({
    name:"timers",
    initialState:{
        timer1:{
            hours:"00",
            minutes:"25",
            seconds:"00",
        },
        timer2:{
            hours:"00",
            minutes:"25",
            seconds:"00",
        }
    },
    reducers:{
        setTime1:(state,action)=>{
            state.timer1=action.payload
        },
        setTime2:(state,action)=>{
            state.timer2=action.payload
        }
    }
})
export const { setTime1, setTime2} = timers.actions;
export const timersReducer = timers.reducer;

export const ChangeTime1=(data)=>(dispatch)=>{
    dispatch(setTime1(data))
}
export const ChangeTime2=(data)=>(dispatch)=>{
    dispatch(setTime2(data))
}