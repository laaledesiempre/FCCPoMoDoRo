import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {ChangeTime1, ChangeTime2} from "../store/slices/timers"

export const App = () => {
    const timer1 = useSelector((state)=>state.timersReducer.timer1)
    const timer2 = useSelector((state)=>state.timersReducer.timer2)
    const [workingLength, setworkingLength] = useState("25")
    const [breackLength, setbreackLength] = useState("5")
    const [working, setWorking] = useState(true)
    const [pause, setPause] = useState(true)
    const [currentTimer, setCurrentTimer] = useState('timer1')
    const dispatch= useDispatch()
    const sound= new Audio('https://cdn.freesound.org/previews/420/420504_8377667-lq.mp3')
    useEffect(() => {
        if (working && !pause) {
          const interval = setInterval(() => {
            if(timer1.minutes=== "00" && timer1.seconds === "00") {
              dispatch(ChangeTime2({minutes:breackLength,seconds:"00"}))
              setWorking(false)
              setCurrentTimer('timer2')
              document.querySelector("body").classList.add("rest")
              document.querySelector(".work-label").classList.remove("resalted")
              document.querySelector(".break-label").classList.add("resalted")
              sound.play()
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
              setWorking(true)
              setCurrentTimer('timer1')
              document.querySelector("body").classList.remove("rest")
              document.querySelector(".break-label").classList.remove("resalted")
              document.querySelector(".work-label").classList.add("resalted")
              sound.play()
            } else {

              let minutes= timer2.minutes
              let seconds= timer2.seconds
              if (seconds!=="00") { if(parseInt(seconds)>10) {seconds= (parseInt(seconds)-1).toString()} else {seconds= "0"+(parseInt(seconds)-1)}} else {if(parseInt(minutes)>10) {minutes= (parseInt(minutes)-1).toString()} else {minutes= "0"+(parseInt(minutes)-1)}; seconds="59 "}
              dispatch(ChangeTime2({minutes:minutes,seconds:seconds}))
            }
          }, 1000);

          return () => clearInterval(interval);
        }
        // eslint-disable-next-line
      }, [timer1,timer2,pause]);
      const timerChanger=(info)=>{
        if (info==='timer1') {return timer1.minutes+":"+timer1.seconds} else {return timer2.minutes+":"+timer2.seconds}
      }
      const changeLogo=()=>{
        if (pause===true) {return <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="logo-sp"  viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>} else {return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="logo-sp" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>}
      }
  return (
    <>
    <main>
        <section className="clockWrapper">
          <p className='clock'>{timerChanger(currentTimer)}</p>
        </section>
        <section className="timer-buttons-wrapper">
          <article className="timer">
            <button className="timer-button" onClick={()=>{parseInt(workingLength)<60 && setworkingLength((parseInt(workingLength)+1).toString())}}>
            <svg className="up-button" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
</svg>
            </button>
            <p className="timer-number">{workingLength}</p>
            <button className="timer-button" onClick={()=>{parseInt(workingLength)>1 && setworkingLength((parseInt(workingLength)-1).toString())}}>
            <svg className="down-button" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
</svg>
            </button>
            <p className="timer-number label work-label resalted">Work</p>
          </article>
          <article className="timer">
          <button className="timer-button" onClick={()=>{parseInt(breackLength)<=60 && setbreackLength((parseInt(breackLength)+1).toString())}}>
          <svg className="up-button" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
</svg>
            </button>
            <p className="timer-number">{breackLength}</p>
            <button className="timer-button" onClick={()=>{parseInt(breackLength)>1 && setbreackLength((parseInt(breackLength)-1).toString())}}>
              <svg className="down-button" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
</svg>
            </button>
            <p className="timer-number label break-label">Break</p>
          </article> 
        </section>
        <section className="pausebutton">
          <button class="pause" onClick={()=>{setPause(!pause)}}>{changeLogo()}</button>
        </section>
    </main>
    
    
    </>
  )
}
