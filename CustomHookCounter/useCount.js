import React, { useState } from 'react';

export const useCount = (initialVal = 0) => {
const [count,setCount] = useState(initialVal)

const Increase = () => {
    setCount((prev) => prev + 1)
  }

  const Decrease = () => {
    setCount((prev) => prev- 1)
  }

  const setZero = () => {
    setCount(0)
  }

  return [count,Increase,Decrease,setZero]
};


