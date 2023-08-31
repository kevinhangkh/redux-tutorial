import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';
import { useState } from 'react';

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);
  const incrementAmount = Number(incrementValue) || 0;

  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  const onIncrementValueChange = (e) => {
    setIncrementValue(e.target.value);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div>
          <input
            type="text"
            value={incrementValue}
            onChange={onIncrementValueChange}
          />
          <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
            Add amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
    </section>
  );
}
