import React, {useState} from "react";
import s from "./tab.module.css";
import {Button} from "./Button";

export const Tablo = (props:any) => {

  return(
      <div className="App">
        <div className={s.tab}>{props.error?<div className={"classError"}>Incorrect Value!</div>:<div className={props.value===props.maxValue?s.aVTab:s.vTab}>{props.value}</div>}</div>
        <div className={"buttons"}>
          <div className={'button1'}><Button onClick={props.f1} title={"inc"} value={props.value} maxValue={props.maxValue}/></div>
          <div className={'button2'}><Button onClick={props.f2} title={"reset"}/></div>
        </div>
      </div>
  )
}