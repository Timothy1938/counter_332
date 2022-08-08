import React from "react";

export const Button = (props: any) => {
    return <button onClick={props.onClick} className={'a'} disabled={props.value && props.maxValue ? props.value===props.maxValue: false}><div className={"text"}>{props.title}</div></button>

}