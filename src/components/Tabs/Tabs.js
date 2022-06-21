import React, { useState, useContext, useCallback, useMemo } from 'react'

const useIncrement = (initialValue, step) => {
  const [count, setCount] = useState(initialValue)
  const increment = () => {
    setCount(t => t + step)
  }
  return [count, increment]
}

const Compteur = () => {

  const [value, increment] = useIncrement(0, 1)

  return (
    <div>
      <button onClick={increment} >Incrementer : {value} </button>
    </div>
  )
}

export default Compteur
