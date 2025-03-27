import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [Amount, setAmount] = useState(0)
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleAmountClick = () => {
    dispatch(incrementByAmount(Amount))
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value" onClick={handleIncrement}> Increment</button>
        <h1>{count}</h1>
        <button aria-label="Decrement value" onClick={handleDecrement} > Decrement </button>
        <br /> <br /> <button onClick={handleReset}>Reset</button>
        <br />
        <input type="text" placeholder='Enter Amount' style={{ width: "200px", height: "25px" }} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button onClick={handleAmountClick}>Set Amount </button>
      </div>
    </div >
  )
}

export default App
