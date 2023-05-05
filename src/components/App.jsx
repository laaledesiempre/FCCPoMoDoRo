import React from 'react'
import {Clock} from "./main/Clock.jsx"
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {ChangeTime1, ChangeTime2} from "../store/slices/timers"

export const App = () => {
    const {timer1,timer2} = useSelector((state)=>state.timerReducer)
    const [workingLength, setworkingLength] = useState("25")
    const [breackLength, setbreackLength] = useState("5")
    const [working, setWorking] = useState(true)
    const [pause, setPause] = useState(true)
    const [currentTimer, setCurrentTimer] = useState("")
    const dispatch= useDispatch()
    useEffect(() => {
        if (working && !pause) {
          const interval = setInterval(() => {
            if(timer1.minutes=== "00" && timer1.seconds === "00") {
              dispatch(ChangeTime2({minutes:breackLength,seconds:"00"}))
              setWorking(false)
            } else {
              
              let minutes= timer1.minutes
              let seconds= timer1.seconds
              if (seconds!=="00") { if(parseInt(seconds)>10) {seconds= (parseInt(seconds)-1).toString()} else {seconds= "0"+(parseInt(seconds)-1)}} else {if(parseInt(minutes)>10) {minutes= (parseInt(minutes)-1).toString()} else {minutes= "0"+(parseInt(minutes)-1)}; seconds="59 "}
              dispatch(ChangeTime1({minutes:minutes,seconds:seconds}))
            }
          }, 1000);
        
          return () => clearInterval(interval);
        } else if(!working && !pause) {
          const interval = setInterval(() => {
            if(timer2.minutes=== "00" && timer2.seconds === "00") {
              dispatch(ChangeTime1({minutes:workingLength,seconds:"00"}))
              setWorking(false)
            } else {

              let minutes= timer2.minutes
              let seconds= timer2.seconds
              if (seconds!=="00") { if(parseInt(seconds)>10) {seconds= (parseInt(seconds)-1).toString()} else {seconds= "0"+(parseInt(seconds)-1)}} else {if(parseInt(minutes)>10) {minutes= (parseInt(minutes)-1).toString()} else {minutes= "0"+(parseInt(minutes)-1)}; seconds="59 "}
              dispatch(ChangeTime2({minutes:minutes,seconds:seconds}))
            }
          }, 1000);

          return () => clearInterval(interval);
        }
        
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
