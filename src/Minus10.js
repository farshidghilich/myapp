import React, { useState } from 'react'

const Minus10 = ({ number, setNumber }) => {
  const [state, setState] = useState(0)

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(number)
          setNumber((last) => last - 10)
        }}
      >
        -10
      </button>
    </div>
  )
}

export default Minus10
