import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import s from './tab.module.css'
import {Tablo} from "./Tablo";
import {SetTablo} from "./SetTablo";

function App() {
    //console.log('' && true)
    const [value,setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [error,setError] = useState(false)
    //console.log(value === undefined || maxValue === undefined)
    console.log(value)
    const f1 = () => {
        if(value<maxValue+1) {
            setValue(value + 1)
        }}
    const f2 = () => {
        setValue(0)
    }
    const setDetValue = (v:number) => {
        setError(value === undefined || maxValue === undefined)

      setValue(v)

    }
    const setDetMaxValue = (v:number) => {

        setError(value === undefined || maxValue === undefined)
      setMaxValue(v)
    }
    const errorMessage = "Incorrect Value!"
    const declareError = () => {
      setError(true)
    }
    const toFalseError = () => {
        setError(false)
    }
  return (
    <div>
        <SetTablo setDetValue={setDetValue} setDetMaxValue={setDetMaxValue} declareError={declareError} toFalseError={toFalseError}/>
        <Tablo f1={f1} f2={f2} value={value}  maxValue={maxValue} error={error}/>
    </div>
  );
}

export default App;

