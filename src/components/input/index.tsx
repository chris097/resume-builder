import React from "react";

type InputProps = {
  label?: string;
  input?: any;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="w-[81%]">
      <div>
        <label className="text-coregray text-base font-normal" htmlFor={props.label}>
          {props.label}
        </label>
      </div>
      <input className="w-full h-[56px] rounded-[8px] border-[#CED4DA] px-3 mt-1 focus:outline-none text-basegray text-sm border" {...props.input} />
    </div>
  );
};

export default Input;
