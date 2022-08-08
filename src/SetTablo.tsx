import React, {useState} from "react";
//import s from "./tab.module.css";
import {Button} from "./Button";
import s from './TabApp.module.css'

export const SetTablo = (props:any) => {
    const [value, setValue] = useState("0")
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [maxValue, setMaxValue] = useState("5")
    const f = () => {

        let x = -1

        let conditionToValue = value.trim() !== "" && !Number.isNaN(value) && Math.sign(Number(value)) !== -1
        let conditionToMaxValue = maxValue.trim() !== "" && !Number.isNaN(maxValue) && Math.sign(Number(maxValue)) !== -1
        console.log(value.trim() !== "" && !Number.isNaN(value) && Math.sign(Number(value)) !== -1)
        //if(value.trim() !== "" && maxValue.trim() !== "" && !Number.isNaN(value) && !Number.isNaN(maxValue) && Math.sign(Number(value)) !==-1 && Math.sign(Number(maxValue)) !==-1){

        if (conditionToValue) {
            props.setDetValue(Number(value))

            setError1(false)
        }
        if (conditionToMaxValue) {
            props.setDetMaxValue(Number(maxValue))
            setError2(false)
        }
        if (conditionToValue && conditionToMaxValue) {
            props.toFalseError()
        }

        if (!conditionToValue) {
            setError1(true)
        }
        if (!conditionToMaxValue) {
            setError2(true)
        }
        if (!conditionToValue || !conditionToMaxValue) {
            props.declareError()
        }
    }



  return(
      <div className="App">
          <div className={s.tab}>
              <span className={s.vTab1}>max value:</span>
              <input className={error1? s.inputError1:s.p1} value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
              {/*{error1 && <div className={s.classError}>Value is required</div>}*/}
              <span className={s.vTab2}>min value:</span>
              <input className={error2? s.inputError2: s.p2} value={maxValue} onChange={(e)=>setMaxValue(e.currentTarget.value)}/>
              {/*{error2 && <div className={s.classError}>Value is required</div>}*/}
          </div>
        <div className={s.buttons}>
          <div className={s.button1}><Button onClick={f} title={"set"}/></div>
        </div>
      </div>
  )
}