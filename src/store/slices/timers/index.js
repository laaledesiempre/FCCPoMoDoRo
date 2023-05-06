import {createSlice} from "@reduxjs/toolkit"

const timersSlice=createSlice({
    name:"timers",
    initialState:{
        timer1:{
            minutes:"25",
            seconds:"00",
        },
        timer2:{
            minutes:"05",
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
export const { setTime1, setTime2} = timersSlice.actions;
export const timersReducer = timersSlice.reducer;

export const ChangeTime1=(data)=>(dispatch)=>{
    dispatch(setTime1(data))
}
export const ChangeTime2=(data)=>(dispatch)=>{
    dispatch(setTime2(data))
}