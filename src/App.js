import React, { useState, useContext, useCallback, useMemo, useEffect} from 'react'

const useIncrement = (initialValue, step) => {
  const [ count, setCount ] = useState(initialValue)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount(t => t + step)
    }, 1000)
    return (() => {
      clearInterval(timer)
    })
  }, [])

  const init = () => {
    setCount(0)
  }

  const increment = () => {
    setCount(t=>t+10)
  }


  return [ count, init, increment ]
}

const Compteur = () => {

  const [value, init, increment ] = useIncrement(0, 1)

  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>Incrementeur de 10</button>
      <button onClick={init}>Reinitialiser </button>
    </div>
  )
}

const useToggle = (initialValue) => {
  const [ value, setValue ] = useState(initialValue)
  const toggle = () => {
    setValue(t => !t)
  }

  return [ value, toggle ]
}

const App = () => {

  const [ compteurVisible, toggle ] = useToggle(false)
  console.log(compteurVisible);

  return(
    <div>
      Afficher le compteur <input type="checkbox" placeholder="toggle" onChange={toggle} checked={compteurVisible}/>
      <br />
      {compteurVisible && <Compteur />}
    </div>
  )
}

export default App
