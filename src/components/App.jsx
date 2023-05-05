import React from 'react'
import {Clock} from "./main/Clock.jsx"
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {ChangeTime1, ChangeTime2} from "../store/slices/timers"

export const App = () => {
    const {timer1,timer2} = useSelector((state)=>state.timerReducer)

    const [currentTimer, setCurrentTimer] = useState("")

    let firstTimer=useEffect(() => {
        const interval = setInterval(() => {
          //here goes the function
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);
    let secondTimer=useEffect(() => {
        const interval = setInterval(() => {
          //here goes the function
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
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
