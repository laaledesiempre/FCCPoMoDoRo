import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {ChangeTime1, ChangeTime2} from "../store/slices/timers"

export const App = () => {
    const timer1 = useSelector((state)=>state.timersReducer.timer1)
    const timer2 = useSelector((state)=>state.timersReducer.timer2)
    const [workingLength, setworkingLength] = useState("1")
    const [breackLength, setbreackLength] = useState("1")
    const [working, setWorking] = useState(true)
    const [pause, setPause] = useState(false)
    const [currentTimer, setCurrentTimer] = useState('timer1')
    const dispatch= useDispatch()
    useEffect(() => {
      console.log("a")
        if (working && !pause) {
          const interval = setInterval(() => {
            if(timer1.minutes=== "00" && timer1.seconds === "00") {
              dispatch(ChangeTime2({minutes:breackLength,seconds:"00"}))
              setWorking(false)
              setCurrentTimer('timer2')
            } else {
              
              let minutes= timer1.minutes
              let seconds= timer1.seconds
              if (seconds!=="00") { if(parseInt(seconds)>10) {seconds= (parseInt(seconds)-1).toString()} else {seconds= "0"+(parseInt(seconds)-1)}} else {if(parseInt(minutes)>10) {minutes= (parseInt(minutes)-1).toString()} else {minutes= "0"+(parseInt(minutes)-1)}; seconds="59 "}
              console.log(seconds)
              dispatch(ChangeTime1({minutes:minutes,seconds:seconds}))
            }
          }, 1000);
        
          return () => clearInterval(interval);
        } else if(!working && !pause) {
          const interval = setInterval(() => {
            if(timer2.minutes=== "00" && timer2.seconds === "00") {
              dispatch(ChangeTime1({minutes:workingLength,seconds:"00"}))
              setWorking(true)
              setCurrentTimer('timer1')
            } else {

              let minutes= timer2.minutes
              let seconds= timer2.seconds
              if (seconds!=="00") { if(parseInt(seconds)>10) {seconds= (parseInt(seconds)-1).toString()} else {seconds= "0"+(parseInt(seconds)-1)}} else {if(parseInt(minutes)>10) {minutes= (parseInt(minutes)-1).toString()} else {minutes= "0"+(parseInt(minutes)-1)}; seconds="59 "}
              dispatch(ChangeTime2({minutes:minutes,seconds:seconds}))
            }
          }, 1000);

          return () => clearInterval(interval);
        }
        
      }, [timer1,timer2]);
      const timerChanger=(info)=>{
        if (info==='timer1') {return timer1.minutes+":"+timer1.seconds} else {return timer2.minutes+":"+timer2.seconds}
      }
  return (
    <>
    <main>
        <section className="clockWrapper">
          <p className='clock'>{timerChanger(currentTimer)}</p>
        </section>
        <section className="timer-buttons-wrapper">
          <article className="timer-work">
            <button onClick={()=>{setworkingLength((parseInt(workingLength)+1).toString())}}>
              up
            </button>
            <p className="timer-number">{workingLength}</p>
            <button onClick={()=>{setworkingLength((parseInt(workingLength)-1).toString())}}>
              down
            </button>
          </article>
          <article className="timer-break">
          <button onClick={()=>{setbreackLength((parseInt(breackLength)+1).toString())}}>
              up
            </button>
            <p className="timer-number">{breackLength}</p>
            <button onClick={()=>{setbreackLength((parseInt(breackLength)-1).toString())}}>
              down
            </button>
          </article> 
        </section>
    </main>
    
    
    </>
  )
}
