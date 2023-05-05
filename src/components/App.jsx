import React from 'react'
import {Clock} from "./main/Clock.jsx"
import { useDispatch, useSelector } from "react-redux"
import {ChangeTime1, ChangeTime2} from "../store/slices/timers"

export const App = () => {
    const {timer1,timer2} = useSelector((state)=>state.timerReducer)
    
  return (
    <>
    <main>
        <section className="clockWrapper">
            <Clock clock={timer1}/>
            <Clock clock={timer2}/>
        </section>

    </main>
    
    
    </>
  )
}
