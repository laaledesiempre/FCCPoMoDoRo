import React from 'react'


export const Clock = (props) => {
    clockObject=props.clock

  return (
    <>
    <section>
    <p>{clockObject.hours+":"+clockObject.minutes+":"+clockObject.seconds}</p>
    </section> 
    </>
  )
}
