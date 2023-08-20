import React from "react";

interface IProps {
  label?: string
  input?: any
  handleClick: any
  icon: any
};

const Input: React.FC<IProps> = (props) => {
  return (
    <div className="w-[81%]">
      <div>
        <label className="text-coregray text-base font-normal" htmlFor={props.label}>
          {props.label}
        </label>
      </div>
      <div className="w-full h-[56px] flex items-center rounded-[8px] border border-[#CED4DA] px-3 mt-1 ">
        <input className="w-full h-full focus:outline-none text-basegray text-sm" {...props.input} />
        <div className="cursor-pointer" onClick={props.handleClick}>{props.icon}</div>
      </div>

    </div>
  );
};

export default Input;
