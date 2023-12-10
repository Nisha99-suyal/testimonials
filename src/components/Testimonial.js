import React, { useState } from 'react'
import Card from './Card.js';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Testimonial(props) {
  let reviews = props.reviews;
  const[index,setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler(){
    if(index+1>=reviews.length){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  function surpriseHandler(){
    let random = Math.floor(Math.random()*reviews.length)
    console.log(random);
    setIndex(random)
  }

  return (
    <div className='Card'>
      <Card review={reviews[index]} />
      <div>
        <button className='left-arrow' onClick={leftShiftHandler}><FaAngleLeft /></button>
        <button className='right-arrow' onClick={rightShiftHandler}><FaAngleRight /></button>
      </div>
      <div>
        <button className='surprise-btn' onClick={surpriseHandler}>Surprise me</button>
      </div>
    </div>
  )
}
