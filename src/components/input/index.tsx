import React from "react";

interface IProps {
  label?: string
  input?: any
  handleClick: any
  icon: any
  inputContainer: string
  inputStyle: string
  labelStyle: string
  container: string
};

const Input: React.FC<IProps> = (props) => {
  return (
    <div className={props.container}>
      <div>
        <label className={props.labelStyle} htmlFor={props.label}>
          {props.label}
        </label>
      </div>
      <div className={props.inputContainer}>
        <input className={props.inputStyle} {...props.input} />
        <div className="cursor-pointer" onClick={props.handleClick}>{props.icon}</div>
      </div>
    </div>
  );
};

export default Input;
