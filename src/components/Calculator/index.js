import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { sum, subtract } from '../../store/Calculator/Calculator.actions';

function Calculator() {
  const [soma, setSoma] = useState();
  const [sub, setSub] = useState();

  const dispatch = useDispatch();
  const result = useSelector(state => state.calculator);
  
  const handleSoma = (e) => setSoma(
    Number(e.target.value)
  );

  const handleSub = (e) => setSub(
    Number(e.target.value)
  );

  return (
    <>
      <input
        type="number"
        placeholder="A"
        value={soma}
        onChange={handleSoma}
      />

      <input
        type="number"
        placeholder="B"
        value={sub}
        onChange={handleSub}
      />

      <button onClick={() => dispatch(sum(soma, sub))}>Somar</button>
      <button onClick={() => dispatch(subtract(soma, sub))}>Subtrair</button>

      <div>{result}</div>
    </>
  );
}

export default Calculator;