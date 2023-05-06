import React from 'react'
import { useSelector } from 'react-redux'

export const Clock = (props) => {
    
    const clockObject = useSelector((state)=>state.timersReducer.timer1)
  return (
    <>
    <section>
    <p></p>
    </section> 
    </>
  )
}
