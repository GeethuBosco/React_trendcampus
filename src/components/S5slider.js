import React from 'react'
import Section5 from './Section5'


const slideimg = [
    
    "./image/coffee.png",
    "./image/lotus.jpg",
    "./image/barbie.jpeg",
  ]

function S5slider() {
  return (
    <div>
        <Section5>
        {slideimg.map((s) =>(
          <img src={s} alt='not found' className=''/>
        ))}
        </Section5>
    </div>
  )
}

export default S5slider